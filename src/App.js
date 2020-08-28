import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  const actors = ['Razzak', 'Jashim', 'Alamgir', 'Salman','Bappi', 'Shuvo']
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.55'},
    {name: 'Premiere El', price: '$249.55'}
  ]

  
  
 
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Working on react</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            actors.map(actor =>  <li>{actor}</li>)
          }
        {
          products.map(product => <li>{product.name}</li>)
        }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
        
      
        
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>

      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>

    </div>
  )
}


function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid gold', width: '400px'}}>
      <h3>My name: {props.name} </h3>
  <p>My profession: {props.job}</p>
    </div>
  )
}

export default App;
