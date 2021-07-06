
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/index'
function App() {
  const counter = useSelector(state => state.counter);
  let logged = useSelector(state => state.logged);
  const dispatcher= useDispatch();
  return (
    <div className="App">
         <h1> Counter {counter} </h1>
         <button onClick={()=>{dispatcher(increment())}}>+</button>
         <button onClick={()=> {dispatcher(decrement())}}>-</button>
         {logged? <h2>you can see this because you're logged in</h2>: <h1>You've to login</h1>}

    </div>
  );
}

export default App;
