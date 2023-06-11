// BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component

import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css';


const BoxList = () => {
    const INITIAL_STATE = [
    ];

    const [ boxes, setBoxes ] = useState(INITIAL_STATE)
    
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
      }

    const removeBox = (e) => {
        const boxesModified = boxes.filter(box => box.id !== e.target.id );
        setBoxes(boxesModified);
    }

    return (
        <div className='BoxList'>
            <h3>Color Box Maker</h3>
            <NewBoxForm addBox={addBox} />
            <div className='BoxList'>
                {boxes.map( ({ id, backgroundColor, width, height }) => <Box 
                id={id} 
                backgroundColor={backgroundColor} 
                width={width} 
                height={height} 
                key={id}
                removeBox={removeBox}
                />)}
            </div>
        </div>
    )
}

export default BoxList;
