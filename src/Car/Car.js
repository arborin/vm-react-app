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


const Car = (props) => {
    // console.log(111);
    return (
    <div>
        <h2>Car Name: {props.name}</h2>
        <p key={1}>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>)
}

export default Car;