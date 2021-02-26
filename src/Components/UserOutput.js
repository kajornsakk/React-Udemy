import React, { Component } from 'react'
import './User.css'

export default class UserOutput extends Component {
    render() {
        return (
            <div className="paragraph">
                <p>Hello, I'm {this.props.userName}</p>
                <p>From Udemy</p>
            </div>
        )
    }
}
