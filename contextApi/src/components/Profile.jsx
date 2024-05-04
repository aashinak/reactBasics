import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <h3>user not found</h3>
  return (
    <div>
        <h3>
            Profile : {user.username}{" "}{user.password}
        </h3>
    </div>
  )
}

export default Profile