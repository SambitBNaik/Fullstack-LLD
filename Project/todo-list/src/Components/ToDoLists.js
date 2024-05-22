import React ,{useState}from 'react';
import { v4 as uuid } from "uuid";
import { TiTrash, TiTick } from "react-icons/ti";

const ToDoLists = () => {
  const[ task,setTask]= useState({
    title:'',
    by: '',
  })
  const [list,setList]=useState([]);

  const  handleTaskInfo=(e)=>{
    const key=e.target.name;
    const value= e.target.value;
    // user is changing title
    //[title] : value
    //...task -> title, by
    setTask({...task,[key]:value});
  }
  
  const addTaskHandler=()=>{
    const updatedTask={...task,id: uuid(),isDone: false}
    setList([...list,updatedTask]);
    setTask({
      title:"",
      by:"",
    })
  };
  const markDonehandler=(id)=>{
    const index = list?.findIndex((task)=>task.id ===id)
    const doneTask =[...list];
    doneTask[index].isDone=true;
    setList(doneTask);
  }
  const deletetaskHandler=(id)=>{
    const filteredTask =list?.filter((task)=>task?.id!==id);
    setList(filteredTask);
  }
  return (
    <>
    <div>
       <div>
       <h1>ToDoLists</h1>
        <div>
            I want to complete{" "}
            <input type='text' name='title' value={task?.title} onChange={(e)=>{handleTaskInfo(e)}} ></input>
            <input type='date' name='by' value={task?.by} onChange={(e)=>{handleTaskInfo(e)}}/>
        </div>
       <button onClick={addTaskHandler}>Add Task</button>
       </div>
       <ul>
        
       </ul>
    </div>
    {list.length>0 && list?.map((item,idx)=>{
      return(
        <li key={idx}>
          <span>
          <strong>{item?.title}</strong> is due by {item?.by}
          <span><TiTick size={24} onClick={()=>markDonehandler(item?.id)}/></span>
          <span><TiTrash size={24} onClick={()=>deletetaskHandler(item?.id)}/></span>
          </span>
        </li>
      )
    })}
    </>
  )
}

export default ToDoLists