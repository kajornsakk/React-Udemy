import React from 'react'
import './User.css'

const UserInput = (props) => {
    
    return (
        <div className="APP">
            <h4>First assignment</h4>
            <input className="input" type={Text} value={props.initialize} placeholder="Text" onChange={props.change}></input>

        </div>
    )
}
export default UserInput;


