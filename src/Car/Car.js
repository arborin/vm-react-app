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
        
    if(props.name.length > 4){
        inputClasses.push('bold');
    }
    
    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)'
    }
    
    
    return (
        <div className="Car" style={style}>       
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