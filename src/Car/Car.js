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
    <div style={{ border: "1px solid #ccc", padding: '10px', margin: '20px'}}>
        <h2>Car Name: {props.name}</h2>
        <p key={1}>Year: <strong>{props.year}</strong></p>
        <input type='text' onChange={props.onChangeName} value={props.name}/>
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>)
}

export default Car;