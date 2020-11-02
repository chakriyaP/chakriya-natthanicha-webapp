import { RICE_STATE } from '../reducers/valueRiceReducer'

export const RICE_ACTION = {
    SET_STATE: 'RICE/SET_STATE',
    CLEAR_STATE: 'RICE/CLEAR_STATE'
}

export const riceAction = {
    setRice1: (value) => ({
        type: RICE_STATE.RICE1,
        value
    })
}