
import { useState } from "react";
import Taskcard from "./Taskcard";
export default function Tasklist(props) {
    const[tasks,setTasks]=useState([{id:1,name:"Reecord lectures",completed:false},{id:2,name:"Edit Reecord lectures",completed:false}
  ,{id:3,name:"Watch React lectures",completed:true}])
  const[show,setShow]=useState(true);
 
  return (
   <>
   <h1>Task list{props.title}</h1>
      <ul>
        <button className='trigger'onClick={()=>setShow(!show)}>Toggle</button>
        {show &&tasks.map((tasks)=>(
          <Taskcard tasks={tasks}/>
        
            
            
            
            
        ))}
      </ul>
   </>
  )
}
