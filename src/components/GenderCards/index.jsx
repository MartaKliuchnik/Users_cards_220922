import React from 'react';
import s from './style.module.sass';
import CardUser from '../CardUser'

export default function GenderCards({ users, gender }) {
    console.log(users)
    return (
        <div className={s.cardsContainer}>
            <p>{gender}</p>
            <div className={s.cards}>
                {users.map(user => <CardUser key={user.id} {...user} />)}
            </div>
        </div>
    )
}
