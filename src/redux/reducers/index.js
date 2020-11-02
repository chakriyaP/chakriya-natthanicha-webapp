import { combineReducers } from 'redux'
import {valueRiceReducer} from './valueRiceReducer'

export const rootReducer = combineReducers({
    valueRice : valueRiceReducer
})
