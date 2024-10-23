import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Greet1 from './components/Greet1';
import Hello from './components/Hello';
import Messge from './components/Messge';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      

      {/*<Counter/>

      <EventBind/>

      <FunctionClick/>
      
      <ClassClick/>

      <Messge />

      <Greet name="Siva" city="Tirupati">
        <p>This is children props</p>
      </Greet>
      <Greet name="Kumar" city="Bangalore">
        <button>Action</button>
      </Greet>
      <Greet name="Reddy" city="Chennai"/>

      <Greet1 name="Jyothsna" city="Banglore"/>
      <Greet1 name="Priya" city="Hyderabad"/>
      <Greet1 name="Reddy" city="Chennai"/>

      {/*<Hello/>*/}
    </div>
  );
}

export default App;
