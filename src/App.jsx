import './App.css'
import Counter from './counter'
import Team from './Team';





function App() {
  
  // Normal Function
  function handleClick(){
    alert('button Clicked');
  }

  // Arrow function
  const handleClick2=()=>{
    alert('button 2 clicked');
  }
  const addToFive=(num)=>{
    alert(num+5);
  }

  return (
    <>
      <h3>React Core Concepts</h3>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Two</button>
      <button onClick={()=>{alert('third click')}}>Click Third</button>
      
      <button onClick={()=>addToFive(3)}>Click Forth</button>
    </>
  )
}

export default App
