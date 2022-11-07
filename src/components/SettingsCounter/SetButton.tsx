import React from 'react';
import s from './SetButton.module.css';
import { Button } from '../Button';

type SetButtonPropstype = {
    count: number,
    error: boolean,
    setStartValue: () => void,
}

export function SetButton(props: SetButtonPropstype) {

    return (
        <div className={s.setButton}>
            <Button
                name={'set'}
                className={s.button}
                callback={props.setStartValue}
                disabled={props.error ? true : false}
            />
        </div>
    );
}