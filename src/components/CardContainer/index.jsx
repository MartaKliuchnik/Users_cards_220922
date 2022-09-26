import React from 'react';
import s from './style.module.sass';
import GenderCards from '../GenderCards';

export default function CardContainer({users}) {
    return (
        <div className={['wrapper', s.container].join(' ')}> 
            <GenderCards users={users} />
        </div>
    )
}
