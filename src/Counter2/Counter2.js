import React from 'react'
import { ClickedContext } from '../App'

export default function Counter2(props) {
    return (
        <div style={{ border: "1px solid red" }}>

            <div>Counter2</div>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked!</p> : null}

            </ClickedContext.Consumer>

        </div>
    )
}
