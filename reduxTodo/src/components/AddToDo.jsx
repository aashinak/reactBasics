import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"

function AddToDo() {
  const [input, setInput] = useState('')
  const [placeholder, setPlaceholder] = useState('Enter todo')
  const [placeholderColor, setPlaceholderColor] = useState('')
  const dispatch = useDispatch()
  const addTodoHandler = (e) => {
    e.preventDefault()
    input === ''?(setPlaceholder("Enter Something!!"),setPlaceholderColor('placeholder-red-400 ')):(dispatch(addTodo(input)),setPlaceholder('Enter todo'),setPlaceholderColor(''))
    
    setInput('')
  }
  return (
    <div className="w-full bg-slate-600 px-7 py-5  rounded-lg shadow-lg">
      <form onSubmit={addTodoHandler} className="flex justify-between" >

        <input type="text" className={`p-2 focus:outline-none text-white ${placeholderColor}   font-semibold bg-transparent border w-3/4 border-white rounded-lg`}
          placeholder={placeholder} 
          name="" id=""
          value={input}
          onChange={(e)=> setInput(e.target.value)} />

          <button className="bg-blue-800 p-2 text-white rounded-lg"
          type="submit"
          >Add Todo</button>
      </form>
        
    </div>
  )
}

export default AddToDo