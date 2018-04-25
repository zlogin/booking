import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Month from './Month'

class MonthList extends Component {
    static propTypes = {

    }

    state = {
        month: moment().format('MMMM')
    }

    render() {
        
        return (
            <div className="calendar__month action__carousel">
                <i className="action action__prev" onClick = { this.prevMonth } ></i>
                <Month month = { this.state.month } />
                <i className="action action__next" onClick = { this.nextMonth } ></i>
            </div>
        )
    }

    nextMonth = () => {
        const { month } = this.state

        this.setState({
            month: moment().month(month).add(1, 'months').format('MMMM')
        })
    }

    prevMonth = () => {
        const { month } = this.state
        
        this.setState({
            month: moment().month(month).add(-1, 'months').format('MMMM')
        })
    }
}
export default MonthList