import {useSelector ,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="mt-5 w-full bg-slate-400 p-4 rounded-lg flex justify-between items-center shadow-lg">
        <label className="text-white font-semibold" htmlFor="">{todo.text}</label>
        <button 
        onClick={() => dispatch(removeTodo(todo.id))}
        className="btn bg-gray-200 p-1 rounded-lg w-24 text-red-700 hover:bg-red-700 hover:text-white ease-in duration-150 transition-all"><i className="fa fa-trash mr-1"></i>DELETE</button>
        </div>
      ))}


        
        
    </>
    
  )
}

export default Todo