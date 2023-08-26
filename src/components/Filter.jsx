import React from 'react';
import { Checkbox} from './Checkbox'

export const Filter = () => {
    return (
        <div className='filter'>
            <p className="filter_text">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <Checkbox name="Все"/>
            <Checkbox name="Без пересадок"/>
            <Checkbox name="1 переcадка"/>
            <Checkbox name="2 пересадки"/>
            <Checkbox name="3 пересадки"/>
        </div>
    );
}
