
 import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";


import './App.css';
import Tasklist from "./components/Tasklist";
import AddTask from "./components/AddTask";

 function App() {
  
  
  
  return (
    <div className="App">
     
      <Header/>
      <AddTask/>
      <Tasklist title="Random"/>
      
      
   
    </div>
  );
}
export default App;

