import React, { useEffect } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';
import { minInputAC, minInputLocStorAC } from './redux/minInput-reducer'
import { maxInputAC, maxInputLocStorAC } from './redux/maxInput-reducer'
import { resCounterAC, incCounterAC } from './redux/counter-reducer'
import { errorMinInputAC, errorMaxInputAC } from './redux/error-reducer'
import { closeSettingsWindowAC, openSettingsWindowAC } from './redux/windowSettings-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'

export function AppWithReduxStandard() {

    const dispatch = useDispatch()
    const minValue = useSelector<RootState, number>(s => s.minInput)
    const maxValue = useSelector<RootState, number>(s => s.maxInput)
    const count = useSelector<RootState, number>(s => s.counter)
    const error = useSelector<RootState, boolean>(s => s.error)
    const opened = useSelector<RootState, boolean>(s => s.windowSettings)

    /* useEffect(() => {
        const minLS = localStorage.getItem('counter 2 - min value')
        const maxLS = localStorage.getItem('counter 2 - max value')
        let min, max
        if (minLS) {
            min = JSON.parse(minLS)
            dispatch(minInputLocStorAC(min))
        }
        if (maxLS) {
            max = JSON.parse(maxLS)
            dispatch(maxInputLocStorAC(max))
        }
    }, []) */

    function changeMinInput(value: number) {
        dispatch(errorMinInputAC(value, minValue, maxValue))
        dispatch(minInputAC(value))
    }

    function changeMaxInput(value: number) {
        dispatch(errorMaxInputAC(value, minValue, maxValue))
        dispatch(maxInputAC(value))
    }

    function setStartValue() {
        dispatch(resCounterAC(minValue))
        dispatch(closeSettingsWindowAC())
        //localStorage.setItem('counter 2 - min value', JSON.stringify(minValue))
        //localStorage.setItem('counter 2 - max value', JSON.stringify(maxValue))
    }
   
    function addCount() {
        dispatch(incCounterAC())
    }

    function resetCount() {
        dispatch(resCounterAC(minValue))
    }

    function openSettings() {
        dispatch(openSettingsWindowAC())
    }

    return (
        <div className="App">
            {opened ?
                <SettingsCounter
                    minValue={minValue}
                    maxValue={maxValue}
                    count={count}
                    error={error}
                    changeMinInput={changeMinInput}
                    changeMaxInput={changeMaxInput}
                    setStartValue={setStartValue}
                />
            :
                <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    count={count}
                    addCount={addCount}
                    resetCount={resetCount}
                    openSettings={openSettings}
                />
            }
        </div>
    );
}