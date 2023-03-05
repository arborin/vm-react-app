// function Car(){
//     return (
//         <h2>This is car Component</h2>
//     )
// }

// import { Children } from "react"


// const car = () => {
//     return (
//        <h2>This is car Component</h2>
//     )
// }

// const car = () => <h2>This is car Component</h2>

// export default car;

import { Component } from 'react';
import './Car.css';


class Car extends Component {


    render() {
        const inputClasses = ['input',];

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red');
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold');
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
        }


        return (
            <div className="Car" style={style}>
                <h2>Car Name: {this.props.name}</h2>
                <p key={1}>Year: <strong>{this.props.year}</strong></p>
                <input type='text'
                    className={inputClasses.join(' ')}
                    onChange={this.props.onChangeName}
                    value={this.props.name} />
                <button onClick={this.props.onDeleteItem}>Delete</button>
            </div>
        )
    }
}






// const Car = (props) => {


// }

export default Car;