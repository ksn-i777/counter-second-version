const OPEN = 'OPEN'
const CLOSE = 'CLOSE'

export type OpenSettingsWindowActionType = {
    type: typeof OPEN
}
export type CloseSettingsWindowActionType = {
    type: typeof CLOSE
}
export type SettingsWindowActionsType = OpenSettingsWindowActionType | CloseSettingsWindowActionType

export function windowSettingsReducer(state:boolean = true, action:SettingsWindowActionsType):boolean {
    switch (action.type) {
        case OPEN:
            return true
        case CLOSE:
            return false
        default:
            return state
    }
}

export function openSettingsWindowAC():OpenSettingsWindowActionType {
    return ({type: OPEN})
}
export function closeSettingsWindowAC():CloseSettingsWindowActionType {
    return ({type: CLOSE})
}