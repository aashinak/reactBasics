
function Todo() {
  return (
    <>
        <div className="mt-5 w-full bg-slate-400 p-4 rounded-lg flex justify-between items-center shadow-lg">
            <label className="text-white font-semibold" htmlFor="">Do homwn</label>
            <button className="btn bg-gray-200 p-1 rounded-lg w-24 text-red-700"><i className="fa fa-trash mr-1"></i>DELETE</button>
        </div>
        
    </>
    
  )
}

export default Todo