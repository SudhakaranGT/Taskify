import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { Todo } from '../model';
import './todolist.css';

type Props ={
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const Card:React.FC<Props> = ({todo,todos,setTodos}:Props) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo)
    

    const handleDone = (id:number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone} : todo
           )
        );
    };

    const handleDelete = (id:number) => {
        setTodos(todos.filter((todo)=>todo.id !== id));
    };


    return (
    <form className='card'>
        {
            todo.isDone?(
                <del className='todos-text'>{todo.todo}</del>
            ):(
                <span className='todos-text'>{todo.todo}</span>
            )
        }       
        <div>
            <span className="icon" ><FaEdit /></span>
            <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdFileDownloadDone /></span>
        </div>
    </form>
  )
}

export default Card
