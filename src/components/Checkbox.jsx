import React, { useState } from 'react';

export const Checkbox = ({name, id}) => {

    return (
        <div className='checkbox' >
        <input  className="checkbox_input" type="checkbox" id={id}/>
        <label className='checkbox_label' htmlFor={id} >{name}</label>
        </div>
    );
}