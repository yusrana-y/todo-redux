import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, completedTodo } from '../redux/todoSlice'

const View = () => {
  const todos = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()
  console.log(todos);

  const handleRemove = (id) => {
    // console.log(id)
    dispatch(removeTodo(id))
  }

  const handleCompleted = (id) => {
    // alert(`im clicked ${id}`)
    dispatch(completedTodo(id))
  }

  return (
    <div>
      <div >
        <ul>
          {todos.length > 0 ?
            todos.map(todo => (
              <li className='border w-1/2 rounded p-3 text-xl m-2 flex items-center justify-between'>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                <div className='flex items-center'>
                  <button
                    className='rounded ms-2 p-1'
                    onClick={() => handleCompleted(todo.id)}
                  >
                    <i
                      className="fa-solid fa-square-check"
                      style={{ color: todo.completed ? 'green' : 'blue' }}
                    />
                  </button>
                  <button
                    className='rounded ms-2 p-1'
                    onClick={() => handleRemove(todo.id)}
                  >
                    <i className="fa-solid fa-trash" style={{ color: 'red' }} />
                  </button>
                </div>
              </li>
            ))
            :
            <div className='text-4xl font-bold text-white'>Free Day!🤞😉</div>
          }
        </ul>
        <h1 className='text-red-500 font-bold text-xl my-4'>You have <span>{todos.length}</span> activities in your Todo!</h1>
      </div>
    </div>
  )
}

export default View
