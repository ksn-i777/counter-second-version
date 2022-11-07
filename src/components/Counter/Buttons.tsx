import React from 'react';
import s from './Buttons.module.css';
import { Button } from '../Button';

type ButtonsPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
    addCount: () => void,
    resetCount: () => void,
    openSettings: () => void,
}

export function Buttons(props: ButtonsPropsType) {

    return (
        <div className={s.buttons}>
            <Button
                name={'inc'}
                className={s.button}
                callback={props.addCount}
                disabled={props.count === props.maxValue ? true : false}
            />
            <Button
                name={'reset'}
                className={s.button}
                callback={props.resetCount}
                disabled={props.count === props.minValue ? true : false}
            />
            <Button
                name={'set'}
                className={s.button}
                callback={props.openSettings}
                disabled={false}
            />
        </div>
    );
}