import React from 'react';
// import s from './style.module.sass';
import CardUser from '../CardUser'

export default function GenderCards({ users }) {
    console.log(users)
    return (
        <div>
            {users.map(user => <CardUser key={user.id} {...user} />)}
        </div>
    )
}
