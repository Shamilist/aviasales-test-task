import React from 'react';
import { Card } from './Card'

export const Cards = () => {
    const cardsNumber = 5;
    return (
        <div className='cards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}
