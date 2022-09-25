import React from 'react';
import s from './style.module.sass'

export default function AddUsers() {

    const submit = event => {
        event.preventDefault();
        const { name_user, gender_user, link_avatar } = event.target;
        console.log(name_user.value, gender_user.value, link_avatar.value);
        name_user.value = '';
        gender_user.value = '';
        link_avatar.value = ''
}

    return (
        <form onSubmit={submit} className={['wrapper', s.form].join(' ')}>
            <div className={s.container_form}>
                <input type="text" placeholder='Имя' name='name_user' />
                <input type="text" placeholder='Пол' name="gender_user" />
                <input type="text" placeholder='Ссылка на аватарку' name="link_avatar" />
                <button>Добавить</button>
            </div>
        </form>
    )
}
