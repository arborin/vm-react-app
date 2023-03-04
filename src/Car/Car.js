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

import './Car.css';


const Car = (props) => {
    
    const inputClasses = ['input',];
    
    if(props.name !== ''){
        inputClasses.push('green')
    }else{
        inputClasses.push('red');
    }
        
    console.log(props.name.length)
    if(props.name.length > 4){
        inputClasses.push('bold');
    }
    
    return (
        <div className="Car">       
            <h2>Car Name: {props.name}</h2>
            <p key={1}>Year: <strong>{props.year}</strong></p>
            <input type='text' 
                    className={inputClasses.join(' ')}
                    onChange={props.onChangeName} 
                    value={props.name}/>
            <button onClick={props.onDeleteItem}>Delete</button>
        </div>
        )
}

export default Car;