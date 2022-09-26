import React from 'react';
import s from './style.module.sass'

export default function EmptyContainer() {
    return (
        <div className={s.emptyCard}>
            <p>Добавьте первого пользователя</p>
        </div>
    )
}
