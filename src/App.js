import { useState } from "react";
function App() {
  const [counter,setCouter] = useState(1);
  
  const handleIncrease = () => {
    setCouter(counter+1)
  }

  return (
    <div className="App">
       <h1> {counter}</h1>
       <button onClick={handleIncrease}> +1 </button>
    </div>
  );
}

export default App;
