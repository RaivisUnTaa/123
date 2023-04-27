import React, {Fragment, useState} from "react";

const InputTodo = () =>{

    const [title, setTitle] = useState("")
    const [end_date, setEndDate] = useState("")
    const [description, setDescription] = useState("")
    const [create_date, setCreateDate] = useState("")
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {title, end_date, description, create_date};
            const response = await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return( 
    <Fragment>
        <h1 className="text-center mt-5">Todo list</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={title}
            placeholder="Insert Title"
            onChange={e => setTitle(e.target.value)}
            />
            
            <input 
            type="text" 
            className="form-control" 
            value={description}
            placeholder="(Optional description)"
            onChange={e => setDescription(e.target.value)}
            />
            
            

        </form>
        <form className="d-flex mt-3" onSubmit={onSubmitForm}>
            <a className="d-flex ">End date</a>
        <input 
            type="date" 
            className="form-control" 
            value={end_date}
            placeholder="End date"
            onChange={e => setEndDate(e.target.value)}
            />
            <a>Start date</a>
        <input 
        
            type="date" 
            className="form-control" 
            value={create_date}
            onChange={e => setCreateDate(e.target.value)}
            />
        </form>
        <button className="btn btn-success mt-3">Add</button>
    </Fragment>
    );
};

export default InputTodo;