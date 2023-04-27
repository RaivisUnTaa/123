import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
    const [title, setTitle] = useState(todo.title);
    const [start_date, setStartDate] = useState(todo.start_date);
    const [description, setDescription] = useState(todo.description);
    const [end_date, setEndDate] = useState(todo.end_date);

    const updateDescription = async(e) => {
        e.preventDefault();
        try {         
            const body = {description};
            const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
            method: "PUT", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)
        });
        } catch (err) {
            console.error(err.message);
        }
    };

    const updateTitle = async(e) => {
      e.preventDefault();
      try {         
          const body = {title};
          const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
          method: "PUT", 
          headers: {"Content-Type": "application/json"}, 
          body: JSON.stringify(body)
      });
      } catch (err) {
          console.error(err.message);
      }
    };

      const updateEndDate = async(e) => {
        e.preventDefault();
        try {         
            const body = {end_date};
            const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
            method: "PUT", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)
        });
        } catch (err) {
            console.error(err.message);
        }
      };
        const updateStartDate = async(e) => {
          e.preventDefault();
          try {         
              const body = {start_date};
              const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
              method: "PUT", 
              headers: {"Content-Type": "application/json"}, 
              body: JSON.stringify(body)
          });
          } catch (err) {
              console.error(err.message);
          }
        };
  
      

   return (
     <Fragment>
  
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>


<div class="modal" id={`id${todo.todo_id}`} onClick={() => {setDescription(todo.description); setTitle(todo.title); setEndDate(todo.end_date); setStartDate(todo.start_date)}}>
  <div class="modal-dialog">

    
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit todo</h4>
      </div>
      <div class="modal-body">
        <p><input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}></input></p>
        <p><input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}></input></p>
        <p><input type="text" className="form-control" value={end_date} onChange={e => setEndDate(e.target.value)}></input></p>
        <p><input type="text" className="form-control" value={start_date} onChange={e => setStartDate(e.target.value)}></input></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => {updateDescription(e); updateTitle(e); updateEndDate(e); updateStartDate(e)}}>Edit</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={() => {setDescription(todo.description); setTitle(todo.title); setEndDate(todo.end_date); setStartDate(todo.setStartDate)}}>Close</button>
      </div>
    </div>

  </div>
</div>

    </Fragment>
   );
};
export default EditTodo;