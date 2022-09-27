import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import s from './style.module.sass'

export default function Button() {
    return (
        <button className={s.btn}><CloseCircleOutlined /></button>
    )
}
