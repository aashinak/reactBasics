import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

function Login() {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>
        <input type="text" placeholder="Username" onChange={(e) =>{setUsername(e.target.value)}} value={username} />
        <input type="text" placeholder="Password" onChange={(e) =>{setPassword(e.target.value)}} value={password} />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login