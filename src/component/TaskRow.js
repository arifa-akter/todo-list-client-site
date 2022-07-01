import React from 'react';

const TaskRow = ({task, handleRemove}) => {
const {name , description ,_id} = task
    return (
        <tr>
        <td className="text-[green]"><input type="checkbox" checked="checked" class="checkbox" /></td> 
        <td className="text-[green]">{name}</td> 
        <td className="text-[green]">{description}</td> 
        <td ><button class="btn btn-xs bg-[green]">edit</button></td> 
        <td><button onClick={() => handleRemove(_id)} class="btn btn-xs bg-[green]">delete</button></td>
        </tr>
    );
};

export default TaskRow;