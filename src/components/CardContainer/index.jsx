import React from 'react';
import s from './style.module.sass';
import GenderCards from '../GenderCards';
import EmptyContainer from '../EmptyContainer';

export default function CardContainer({ users, deleteCard, deleteGender }) {
    
    const result = [];

    users.forEach(user => {
        const curGender = result.find(el => el.id === user.gender);
        if (curGender !== undefined) {
            curGender.genders.push(user)
        } else {
            result.push({
                id: user.gender,
                genders: [user]
            })
        }
    })

    result.sort((a, b) => +a.id - +b.id);

    return (
        <div className={['wrapper', s.container].join(' ')}> 
            {
                users.length === 0 
                ? <EmptyContainer/>
                : result.map(user =>
                    <GenderCards
                        key={user.id}
                        gender={user.id}
                        users={user.genders}
                        deleteCard={deleteCard}
                        deleteGender={deleteGender} />
                    )
            }
        </div>
    )
}
