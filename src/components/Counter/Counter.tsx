import React from 'react';
import s from './Counter.module.css';
import { Display } from './Display';
import { Buttons } from './Buttons';

type CounterPropsType = {
    count: number,
    minValue: number,
    maxValue: number,
    addCount: () => void,
    resetCount: () => void,
    openSettings: () => void,
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={s.counter}>
            <Display
                minValue={props.minValue}
                maxValue={props.maxValue}
                count={props.count}
            />
            <Buttons
                minValue={props.minValue}
                maxValue={props.maxValue}
                count={props.count}
                addCount={props.addCount}
                resetCount={props.resetCount}
                openSettings={props.openSettings}
            />
        </div>
    );
}