import React from 'react';
import s from './style.module.sass';
import CardUser from '../CardUser';
import { genderLabels } from './genderLabels';
import Button from '../UI/Button';

export default function GenderCards({ users, gender }) {
    return (
        <div className={s.cardsContainer}>
            <p>{genderLabels[gender]}</p>
            <div className={s.cards}>
                {users.map(user => <CardUser key={user.id} {...user} />)}
            </div>
            <div className={s.close_btn}>
                <Button/>
            </div>
        </div>
    )
}
