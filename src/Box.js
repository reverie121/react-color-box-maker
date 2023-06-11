// Box- this component should display a div with a background color, width and height based on the props passed to it.
// When each Box component is displayed, add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button should not be a separate component, it should be included in the Box component.

import React from "react";
import './Box.css';

const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    return (
        <div className='Box'>
            <div style={{ backgroundColor, minWidth: `${width}px`, maxWidth: `${width}px`, minHeight: `${height}px`, maxHeight: `${height}px` }}>
            </div>
            <button onClick={removeBox} className='remove' id={`${id}`}>x</button>
        </div>
    )
}

export default Box;