import React from 'react';
import s from './style.module.sass';
import GenderCards from '../GenderCards';
import EmptyContainer from '../EmptyContainer';

export default function CardContainer({users}) {
    return (
        <div className={['wrapper', s.container].join(' ')}> 
            {
                users.length === 0 
                ? <EmptyContainer/>
                : <GenderCards gender={'Мужчины'} users={users} />
            }
        </div>
    )
}
