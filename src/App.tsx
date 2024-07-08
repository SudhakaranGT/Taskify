import './App.css'
import React from 'react'
import InputFeild from './Components/InputFeild';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './Components/TodoList';

const App:React.FC = () => {

  const[todo,setTodo] = useState<string>("");
  // console.log(todo)

  const[todos,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent<EventTarget>) =>{
      e.preventDefault();
      if (todo){
        setTodos([...todos,{id:Date.now(),todo,isDone:false}])
        setTodo("");
      }
      
  };

  return (
    <div className='App'>
      <span className='heading'>taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
