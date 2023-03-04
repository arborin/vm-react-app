// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

import React, { Component } from 'react'
import Car from './Car/Car'

class App extends Component {
  
  state = {
    cars: [
      {name: 'audi', year: 1990},
      {name: 'ford', year: 2000},
      {name: 'BMW', year: 2021},
    ],
    pageTitle: 'React Components',
    showCars: true
  }
  
  changeTitle = (newTitle) => {
    // let oldTitle = this.state.pageTitle;
    
    this.setState({
      pageTitle: newTitle
    });
  }
    
  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    })
  }
  
  toggleCars = () => {
    console.log(this.state.showCars);
    this.setState({
        showCars: !this.state.showCars
      });
  }
  
  
  onChangeName = (name, index) => {
    console.log(name, ' ', index);
    
    const car = this.state.cars[index];
    car.name = name;
    
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars
    });
    
  }
   
  render() {
    
    const title = {'fontSize': '40px', 'color': 'blue' };
    
    // const cars = this.state.cars;
       
    let cars = null;
    
    if(this.state.showCars){
      cars = this.state.cars.map((car, index)=>{
                return (
                        <Car key={index} name={car.name} 
                        year={car.year} 
                        onChangeName={(event) => this.onChangeName(event.target.value, index)}/>
                )
              });
    }else{
      cars = <h1>NO CARS</h1>
    }
    
    
    return (
      <div className='App'>
      
        
        <h1 style={title}>{this.state.pageTitle}</h1>
        
        <input type='text' onChange={this.handleInput}/>
        
        <button onClick={this.changeTitle.bind(this,'Changed!')}>change title</button>
        <div>
          <button onClick={this.toggleCars}>Toggle Cars</button>
        </div>
        
        {/* <Car name={'audi'} year={'2017'} onChangeTitle={this.changeTitle.bind(this, cars[0]['name'])}/> */}
        {/* <Car name={'ford'} year={'2020'}><p>Color</p></Car> */}
        
        {cars}  
        
        <p style={{'color': 'red', 'fontSize': '28px'}}>Nika Kobaidze</p>
      </div>
    )
  }
}


export default App;


/** 
 * 
 * თუ სადმე jsx - ს ვიყენებთ უნდა დავაიმპორტოთ React_ი
 * 
 * 
 */