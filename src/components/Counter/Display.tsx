import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    minValue: number,
    maxValue: number,
    count: number,
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={props.count === props.maxValue ? s.info + ' ' + s.numberMax : s.info}>
            {props.count === props.maxValue ? props.count + ' max' : props.count}
        </div>
    )
}
