import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import useTask from './Hooks/useTask';
// import UserItems from './UserItems';

const Task = () => {
    // const navigate =useNavigate() 

    const handleForm = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const user = { name, description };
        console.log(user);
        const url = `https://evening-atoll-50536.herokuapp.com/add-task/`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                e.target.reset();
                // toast.success("Added Successfully", {toastId : "SUCCESS"})
            });
 
    };
  
   
    return (
        <div className="mt-24">
        <div class="card w-96 bg-base-100 shadow-xl flex mx-auto mt-12">
            <div class="card-body">
                <h2 class="card-title mx-auto text-[green]">To-DO APP</h2>
                <form onSubmit={handleForm} >
                    <input className=' w-full border   mt-3 p-1' type="text" name="name" placeholder='Task-Name' />
                    <br />

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>

                        </label>
                        <textarea class="textarea textarea-bordered h-24" name="description" placeholder="Discription" ></textarea>

                    </div>

                    <input  className='btn w-full bg-[green] mt-5' type="submit" value="Add Task" />
                </form>


            </div>


        </div>
      
    </div>
    );
};

export default Task;