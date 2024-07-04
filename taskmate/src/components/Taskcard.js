

export default function Taskcard(props) {
    // function handleDelete(id){
    //     setTasks(tasks.filter(task=>task.id !==id));
    //   }
  return (
    <>
    <li key={props.tasks.id}className={props.tasks.completed?"completed":"incompleted"}>
    <span>{props.tasks.id}-{props.tasks.name}</span>
    <button className='delete'>Delete</button>
    </li>
    </>
  )
}
