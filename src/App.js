
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, login, logout} from './actions'
function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const dispatcher= useDispatch();
  return (
    <div className="App">
         <h1> Counter {counter} </h1>
         <button onClick={()=>{dispatcher(increment())}}>+</button>
         <button onClick={()=> {dispatcher(decrement())}}>-</button>
         <button onClick={()=> {logged? dispatcher(login()) : dispatcher(logout())}}>"{logged}"</button>
         {!logged? <h2>you can see this because you're logged in</h2>: <h1>You've to login</h1>}

    </div>
  );
}

export default App;
