import React, { useRef } from 'react'
import './input.css'


interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent<EventTarget>)=>void;
}

const InputFeild = ({ todo, setTodo , handleAdd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action="" onSubmit={(e)=>{handleAdd(e);inputRef.current?.blur()}} className='input'>
        <input 
        ref={inputRef}
        type="text" 
        placeholder='Enter a task' 
        className='input-box' 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}/>
        <button className='input-submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild
