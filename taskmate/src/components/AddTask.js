import { useState } from "react";
import "./AddTask.css";

export default function AddTask() {
    
    const [taskValue,setTaskValue]=useState("");
  return (
    <section className="addTask">
        <form>
            <label htmlFor="task">Task Name</label>
            <input type="text" name="task" id="task" placeholder="Task name" autoComplete="off"/>
<input onChange={(e)=>setTaskValue(e.target.value)} type="text"/>
<button type="submit">AddTask</button>
        </form>
        <p>{taskValue.length}</p>
    </section>

    
  )
}

