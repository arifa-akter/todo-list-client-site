import React from 'react';
import { useState ,useEffect} from 'react';
import TaskRow from './TaskRow';
const ToDo = () => {
    const [allTask , setAllTask] =useState([]) 
    useEffect(()=>{
      fetch('https://evening-atoll-50536.herokuapp.com/tasks')
      .then(res=>res.json())
      .then(data=>setAllTask(data))
    },[])
    console.log(allTask)
    const handleRemove = (id) =>{
        const proceed = window.confirm("Are you sure you want to delete?");
        if(proceed){
          const url = `https://evening-atoll-50536.herokuapp.com/tasks/${id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then( data =>{
            const remaining = allTask.filter(task => task._id !== id);
            setAllTask(remaining)
            console.log('deletd data', data);
          })
        }
      }
    return (
       <section className="mt-24">
        <div className="container mx-auto">
        <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th className="text-[green]">cheek status</th> 
        <th className="text-[green]">Name</th> 
        <th className="text-[green]">Task description</th> 
        <th className="text-[green]">edit</th> 
        <th className="text-[green]">delete</th> 
      </tr>
    </thead> 
    <tbody>
       {
       allTask.map(task=><TaskRow
       key={task._id}
       task={task}
       handleRemove={handleRemove}

       ></TaskRow>)
       }
    </tbody> 
 
  </table>
</div>
        </div>

       </section>
    );
};

export default ToDo;