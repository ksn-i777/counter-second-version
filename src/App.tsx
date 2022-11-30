import React, { useEffect, useState } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';

export function App() {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(0)    
    const [error, setError] = useState<boolean>(false)
    const [opened, setOpened] = useState<boolean>(true)

    function changeMinInput(value: number) {
        if(value < 0 || value >= maxValue) {setError(true)} else {setError(false)}
        setMinValue(value)
    }
    function changeMaxInput(value: number) {
        if(value < 0 || value <= minValue) {setError(true)} else {setError(false)}
        setMaxValue(value)
    }
    function setStartValue() {
        if (!error) {
            setCount(minValue)
        }
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setOpened(false)
    }
    useEffect(() => {
        const minLS = localStorage.getItem('minValue')
        const maxLS = localStorage.getItem('maxValue')
        let min
        let max
        if (minLS) {
            min = JSON.parse(minLS)
            setMinValue(min)
        }
        if (maxLS) {
            max = JSON.parse(maxLS)
            setMaxValue(max)
        }
    }, [])
    
    function addCount() {count < maxValue && setCount(count + 1)}
    function resetCount() {setCount(minValue)}
    function openSettings() {
        setOpened(true)
    }

    return (
        <div className="App">
            {opened &&
                <SettingsCounter
                    minValue={minValue}
                    maxValue={maxValue}
                    count={count}
                    error={error}
                    changeMinInput={changeMinInput}
                    changeMaxInput={changeMaxInput}
                    setStartValue={setStartValue}
                />
            }
            {!opened &&
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