import Container from "../container/Container"
import Logo from "../Logo"
import { Link, useNavigate } from 'react-router-dom'
import LogoutBtn from "./LogoutBtn"
import { useSelector } from "react-redux"

function Header() {
    const authStatus = useSelector( (state) => state.auth.status )
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Posts",
            slug: "/add-post",
            active: authStatus
        },
    ]
  return (
    <header className="py-3 shadow bg-gray-500 ">
        <Container>
            <nav className="flex">
                <div className="mr-4">
                    <Link to="/">
                        <Logo width="17%"/>
                    </Link>
                </div>
                <ul className="flex ml-auto">
                    {
                        navItems.map((item) => item.active ? (
                            <li key={item.name}>
                                <button onClick={() => navigate(item.slug)}
                                className="inline-block px-6 py-2 duration-200 
                                hover:bg-blue-100 rounded-full">
                                    {item.name}
                                </button>
                            </li>
                        ) : null )
                    }
                    {
                        authStatus && (
                            
                                 <li>
                                <LogoutBtn/>
                            </li>
                            
                           
                            
                              
                        )
                        
                    }
                    {
                        authStatus && (
                            
                               <li className="inline-block px-6 py-2 font-bold text-white">
                                {userData.name}
                               </li>
                            
                           
                            
                              
                        )
                        
                    }
                </ul>
            </nav>
        </Container>
         
    </header>
  )
}

export default Header