import React from 'react';
// import TaskRow from './TaskRow';

const Edit = () => {
       
    const handleForm = (e, id) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const user = { name, description };
        console.log(user);
        const url = `https://evening-atoll-50536.herokuapp.com/task/${id}`
        fetch(url, {
            method: "PATCH",
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
                <h2 class="card-title mx-auto text-[green]">edit to-do</h2>
                <form onSubmit={handleForm} >
                    <input className=' w-full border   mt-3 p-1' type="text" name="name" placeholder='Task-Name' />
                    <br />

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Description</span>

                        </label>
                        <textarea class="textarea textarea-bordered h-24" name="description" placeholder="Discription" ></textarea>

                    </div>
                    {/* {
                        <TaskRow
                        handleForm={handleForm}
                        ></TaskRow>
                    } */}


                    <input  className='btn w-full bg-[green] mt-5' type="submit" value="Add Task" />
                </form>


            </div>


        </div>
      
    </div>
    );
};

export default Edit;