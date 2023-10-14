'use client'

import { useState } from 'react'

const AddTodo = () => {
  const [todo, setTodo] = useState('')
  const handleFormSubmit = (e: { preventDefault: () => void })=>{
    e.preventDefault();
    setTodo('');
  }

  return (
    <form action="">
      <input type="text" name="" id="" placeholder='write your todo' value={todo} onChange={(e) =>
        setTodo(e.target.value)
      } />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo