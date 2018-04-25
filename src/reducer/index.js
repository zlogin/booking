import { combineReducers } from 'redux'
import calendar from './calendar'
import busy from './busy'

export default combineReducers({
    calendar,
    busy
})