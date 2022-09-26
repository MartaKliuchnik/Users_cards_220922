import React from 'react';
// import s from './style.module.sass'

export default function CardUser({name, avatar}) {
    return (
        <div>
            <p>{name}</p>
            <img src={avatar} alt="photo" />
        </div>
    )
}
