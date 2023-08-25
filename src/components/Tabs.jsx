import React from 'react';
import { Tab } from './Tab'

export const Tabs = () => {
    return (
        <ul className='tabs'>
        <Tab name='right_tab' text='САМЫЙ ДЕШЕВЫЙ'/>
        <Tab name='center_tab' text='САМЫЙ БЫСТРЫЙ'/>
        <Tab name='left_tab' text='ОПТИМАЛЬНЫЙ'/>
        </ul>
    );
}