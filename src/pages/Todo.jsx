import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([]);

    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    const [value, setValue] = useState("");
    const addHandler = () => {
        if (value !== "") {
            setTodo([...todo, value]);
            setValue("");
        }
    }

    const editHandler = (id) => {
        const edititem = todo.filter((item, index) => index === id);
        const newTxt = window.prompt("Edit", edititem);
        if(newTxt){
            const updateItem = todo.map((item, index) => index == id ? newTxt : item);
            setTodo(updateItem);
        }
        

    }

    const deleteHandler = (id) => {
        const exceptDeleteItem = todo.filter((item, index) => index !== id);
        setTodo(exceptDeleteItem);
    }

    return (
        <div className='todo'>
            <h1>TODO LIST</h1>
            <br></br>
            <hr></hr>
            <input type="text" placeholder='add item...' value={value} name='item' className='todo todo--input' onChange={inputHandler} />
            <button type="submit" className='btn btn--add' onClick={addHandler}>ADD</button>
            <div className='container'>
                {
                    todo.map((item, index) => 
                        <div className='card' key={index}>
                            {console.log(index)}
                            <p>{item}</p>
                            <div>
                                <input type="button" value="Edit" className='btn btn--edit' onClick={() => editHandler(index)}/>
                                <input type="button" value="Delete" className='btn btn--delete' onClick={() => deleteHandler(index)}/>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Todo