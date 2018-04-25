import moment from 'moment'
import { INCREMENT } from '../constants'

moment.locale('ru')
const calendar = moment.utc()

const initialState = {
  calendar: calendar,
  currentMonth: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'SET_MONTH': return { ...state, currentMonth: action.payload }
    
    default:
      return state;
  }
}