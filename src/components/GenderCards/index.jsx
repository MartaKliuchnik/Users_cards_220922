import React from 'react';
import s from './style.module.sass';
import CardUser from '../CardUser';
import { genderLabels } from './genderLabels';
import Button from '../UI/Button';

export default function GenderCards({ users, gender, deleteCard, deleteGender }) {
    return (
        <div className={s.cardsContainer}>
            <p>{genderLabels[gender]}</p>
            <div className={s.cards}>
                {users.map(user => <CardUser
                    key={user.id}
                    {...user}
                    deleteCard={deleteCard} />)}
            </div>
            <div className={s.close_btn}>
                <Button onClick={() => deleteGender(gender)} />
            </div>
        </div>
    )
}
