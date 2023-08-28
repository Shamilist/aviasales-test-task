import React, { useState } from 'react';

export const Checkbox = ({name, id}) => {
    const [checked, isChecked] = useState(false);

    const handleClick = () => {
        isChecked(checked => !checked);
        console.log('checked', checked)
    }

    return (
        <div className='checkbox' >
        <input  className="checkbox_input" type="checkbox" id={id} onClick={handleClick}/>
        <label className='checkbox_label' htmlFor={id}>{name}</label>
        </div>
    );
}