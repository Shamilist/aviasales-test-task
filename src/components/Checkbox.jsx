import React, { useState } from 'react';

export const Checkbox = ({name, id}) => {
    const [checked, isChecked] = useState(false);

    const handleClick = () => {
        isChecked(checked => !checked);
    }

    return (
        <div className='checkbox'>
        <input  className="checkbox_input" type="checkbox" id={id}/>
        <label htmlFor={id} onClick={handleClick} >{name}</label>
        </div>
    );
}