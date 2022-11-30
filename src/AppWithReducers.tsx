import React, { useEffect, useState, useReducer } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';
import { minInputReducer, minInputAC, minInputLocStorAC } from './redux/minInput-reducer'
import { maxInputReducer, maxInputAC, maxInputLocStorAC } from './redux/maxInput-reducer'
import { counterReducer, resCounterAC, incCounterAC } from './redux/counter-reducer'
import { errorReducer, errorMinInputAC, errorMaxInputAC } from './redux/error-reducer'
import { windowSettingsReducer, closeSettingsWindowAC, openSettingsWindowAC } from './redux/windowSettings-reducer'

function App() {

    const [minValue, dispatchMinValue] = useReducer(minInputReducer, 0)
    const [maxValue, dispatchMaxValue] = useReducer(maxInputReducer, 5)
    const [count, dispatchCount] = useReducer(counterReducer, 0) 
    const [error, dispatchError] = useReducer(errorReducer, false)
    const [opened, dispatchOpened] = useReducer(windowSettingsReducer, true)

    useEffect(() => {
        const minLS = localStorage.getItem('counter 2 - min value')
        const maxLS = localStorage.getItem('counter 2 - max value')
        let min, max
        if (minLS) {
            min = JSON.parse(minLS)
            dispatchMinValue(minInputLocStorAC(min))
        }
        if (maxLS) {
            max = JSON.parse(maxLS)
            dispatchMaxValue(maxInputLocStorAC(max))
        }
    }, [])

    function changeMinInput(value: number) {
        dispatchError(errorMinInputAC(value, minValue, maxValue))
        dispatchMinValue(minInputAC(value))
    }

    function changeMaxInput(value: number) {
        dispatchError(errorMaxInputAC(value, minValue, maxValue))
        dispatchMaxValue(maxInputAC(value))
    }

    function setStartValue() {
        dispatchCount(resCounterAC(minValue))
        dispatchOpened(closeSettingsWindowAC())
        localStorage.setItem('counter 2 - min value', JSON.stringify(minValue))
        localStorage.setItem('counter 2 - max value', JSON.stringify(maxValue))
    }
   
    function addCount() {
        dispatchCount(incCounterAC())
    }

    function resetCount() {
        dispatchCount(resCounterAC(minValue))
    }

    function openSettings() {
        dispatchOpened(openSettingsWindowAC())
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

export default App