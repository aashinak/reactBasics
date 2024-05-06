
function AddToDo() {
  return (
    <div className="w-full bg-slate-600 px-7 py-5 flex justify-between rounded-lg shadow-lg">
        <input type="text" className="p-2 bg-transparent border w-3/4 border-white rounded-lg" placeholder="Enter toDo" name="" id="" />
        <button className="bg-blue-800 p-2 text-white rounded-lg">Add Todo</button>
    </div>
  )
}

export default AddToDo