import React from 'react';

export const Tab = (prop) => {
    const tabClass = `tab ${prop.name}`;
    return (
        <li className={tabClass}>
            {prop.text}
        </li>
    );
}