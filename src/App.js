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
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import MyPureComp from './components/MyPureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter1 from './components/Counter1';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">

      <PostList/>

      {

      /*<Counter/>

      <UserProvider value="Siva">
        <ComponentC/>
      </UserProvider>

      <Counter1
      render = {(Count, incrementCount) => (
      <ClickCounterTwo 
      Count = {Count} incrementCount = {incrementCount}/>)}/>
      <Counter1
      render = {(Count, incrementCount) => (
      <HoverCounterTwo
      Count = {Count} incrementCount = {incrementCount}/>)}/>

      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render = {(isLoggedIn) => isLoggedIn ? "Siva" : "Guest"}/> 

      <ClickCounter/>
      <HoverCounter/>

      <PortalDemo/>

      <FRParentInput/>

      <FocusInput/>

      <RefsDemo/>

      <ParentComp/>

      <MyPureComp/>

      <Table/>

      <FragmentDemo/>

      <LifecycleA/>

      <Form/>

      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1>
      <Inline/>

      <Stylesheet primary={true}/>

      <NameList/>

      <UserGreeting/>

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

      {/*<Hello/>*/
      }
    </div>
  );
}

export default App;
