import React, { Component } from 'react'
import Auxiliary from '../hoc/Auxiliary'

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <Auxiliary>
                <h1>COUNTER <span>{this.state.counter}</span></h1>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </Auxiliary>
        )
    }
}
