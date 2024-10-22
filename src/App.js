import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Greet1 from './components/Greet1';
import Hello from './components/Hello';
import Messge from './components/Messge';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      <Greet name="Siva" city="Tirupati">
        <p>This is children props</p>
      </Greet>

      <Greet1 name="Jyothsna" city="Banglore"/>
      {/*<Counter/>
      <Messge />
      
      <Greet name="Kumar" city="Bangalore">
        <button>Action</button>
      </Greet>
      <Greet name="Reddy" city="Chennai"/>

      
      <Greet1 name="Priya" city="Hyderabad"/>
      <Greet1 name="Reddy" city="Chennai"/>

      {/*<Hello/>*/}
    </div>
  );
}

export default App;
