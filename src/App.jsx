import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const name = useSelector((state)=>state.name)
  const dispatch = useDispatch()
  const handelInput = (e)=>{
    dispatch({
       type:"Name",
       payload: e.target.value
    })
  }
  return (
    <div className="App">
      <input type='text' onChange={handelInput}/>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
