import { createStore, combineReducers } from 'redux'
import { minInputReducer } from './minInput-reducer'
import { maxInputReducer } from './maxInput-reducer'
import { counterReducer } from './counter-reducer'
import { errorReducer } from './error-reducer'
import { windowSettingsReducer } from './windowSettings-reducer'

const rootReducer = combineReducers({
    minInput: minInputReducer,
    maxInput: maxInputReducer,
    counter: counterReducer,
    error: errorReducer,
    windowSettings: windowSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)