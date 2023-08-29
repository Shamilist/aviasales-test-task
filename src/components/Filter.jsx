import React from 'react';
import { Checkbox} from './Checkbox'

export const Filter = () => {
    return (
        <div className='filter'>
            <p className="filter_text">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <Checkbox name="Все" id={1}/>
            <Checkbox name="Без пересадок" id={2}/>
            <Checkbox name="1 переcадка" id={3}/>
            <Checkbox name="2 пересадки" id={4}/>
            <Checkbox name="3 пересадки" id={5}/>
        </div>
    );
}
