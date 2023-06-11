// NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

import React, {useState} from "react";
import './NewBoxForm.css';

const NewBoxForm = ( { addBox } ) => {
    const INITIAL_STATE = {
    backgroundColor: '',
    width: '',
    height: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
    <form onSubmit={handleSubmit} className='NewBoxForm'>
        <div>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="number"
                min="10"
                max="5000"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="number"
                min="10"
                max="5000"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleChange}
            />
        </div>

        <button>Add Item</button>
    </form>
    )

}

export default NewBoxForm;




