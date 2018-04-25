import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Month extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="month__detail">
                <span className="month__title">{ this.props.month }</span>
            </div>
        )
    }
}
