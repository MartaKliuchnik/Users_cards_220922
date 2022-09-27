import React from 'react';
import s from './style.module.sass';


export default function AddUsers({addUsersCard}) {

    const submit = event => {
        event.preventDefault();
        const { name_user, gender_user, link_avatar } = event.target;
        addUsersCard(name_user.value, gender_user.value, link_avatar.value);
        console.log(name_user.value, gender_user.value, link_avatar.value);
        name_user.value = '';
        gender_user.value = '';
        link_avatar.value = ''
    };

    return (
        <form onSubmit={submit} className={['wrapper', s.form].join(' ')}>
            <div className={s.container_form}>
                <input type="text" placeholder='Имя' name='name_user' />
                <select defaultValue="" className={s.gender_input} name="gender_user">
                    <option value="" disabled hidden>Пол</option>
                    <option value='1'>Мужчина</option>
                    <option value='2'>Женщина</option>
                </select>
                <input type="text" placeholder='Ссылка на аватарку' name="link_avatar" />
                <button>Добавить</button>
            </div>
        </form>
    )
}
