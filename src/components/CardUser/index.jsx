import React from 'react';
import s from './style.module.sass'

export default function CardUser({name, avatar}) {
    return (
        <div className={s.usersCard}>
            <img src={avatar} alt="avatar" />
            <p>{name}</p>
        </div>
    )
}
