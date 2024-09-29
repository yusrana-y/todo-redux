import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const Add = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const handleAdd = (e) => {
    if (todo) {
      // console.log(todo);
      
      dispatch(addTodo(todo))
      setTodo('')
    }
    else {
      alert('please enter a todo')
    }
  }

  return (
    <div className=''>
      <input type="text" value={todo} className='border rounded p-2 w-1/2' placeholder='Whats on your mind? 👀' onChange={e => setTodo(e.target.value)} />
      <button type="button" className='bg-blue-500 rounded shadow-lg p-2 m-2' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Add