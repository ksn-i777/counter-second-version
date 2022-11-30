const ERROR_OR_NOT_MIN = 'ERROR-OR-NOT-MIN'
const ERROR_OR_NOT_MAX = 'ERROR-OR-NOT-MAX'

export type ErrorMinInputActionType = {
    type: typeof ERROR_OR_NOT_MIN
    value: number
    minValue: number
    maxValue: number
}
export type ErrorMaxInputActionType = {
    type: typeof ERROR_OR_NOT_MAX
    value: number
    minValue: number
    maxValue: number
}
export type InputsErrorActionsType = ErrorMinInputActionType | ErrorMaxInputActionType

export function errorReducer(state:boolean, action:InputsErrorActionsType):boolean {
    switch (action.type) {
        case ERROR_OR_NOT_MIN:
            return action.value < 0 || action.value >= action.maxValue
        case ERROR_OR_NOT_MAX:
            return action.value < 0 || action.value <= action.minValue
        default:
            return state
    }
}

export function errorMinInputAC(value:number, minValue:number, maxValue:number):ErrorMinInputActionType {
    return ({type: ERROR_OR_NOT_MIN, value: value, minValue: minValue, maxValue: maxValue})
}
export function errorMaxInputAC(value:number, minValue:number, maxValue:number):ErrorMaxInputActionType {
    return ({type: ERROR_OR_NOT_MAX, value: value, minValue: minValue, maxValue: maxValue})
}