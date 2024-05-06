
import './App.css'
import AddToDo from './components/AddToDo'
import Todo from './components/Todo'

function App() {

  return (
   <div className='w-full min-h-screen py-10 bg-slate-500 flex justify-center items-center'>
    <div className='w-2/5 bg-slate-300 px-10 py-10 rounded-xl flex flex-col  items-center min-h-64  shadow-xl'>
      <AddToDo/>
      <Todo/>
      
      

    </div>
   </div>
  )
}

export default App
