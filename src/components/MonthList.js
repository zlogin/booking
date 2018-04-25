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
                <i className="action action__prev" onClick = { this.prevMonth } >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <polygon points="30 10, 10 25, 30 40" />
                    </svg>
                </i>
                <Month month = { this.state.month } />
                <i className="action action__next" onClick = { this.nextMonth } >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <polygon points="20 10, 40 25, 20 40" />
                    </svg>
                </i>
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