import { useEffect, useState } from "react"
import appwriteService from "../appwrite/config"
import Container from "../components/container/Container"
import PostCard from "../components/PostCard"
import Loader from "../components/Loader"
import { useSelector } from "react-redux"


function Home() {
  const authStatus = useSelector((state) => state.auth.status)
  const [posts, setPosts] = useState([])
  useEffect(() => {
     appwriteService.getPosts([]).then((posts) => {
      if(posts){
        setPosts(posts.documents)
      }
     })
  },[])
  if (posts.length === 0 && authStatus) {
    return (
      <div className="w-full py-8">
      <Container>
        <Loader/>
      </Container>
    </div>
    )
  } else if (posts.length === 0){
    return (
      <div className="w-full py-8">
      <Container>
        <h1>Login to view posts</h1>
      </Container>
    </div>
    )
  }
  return (
    <div className="w-full py-8">
    <Container>
      <div className="flex flex-wrap">
         {posts.map((post) => (
          <div className="p-2 w-1/4" key={post.$id}>
             <PostCard {...post}/>
          </div>
         ))}
      </div>
    </Container>
   </div>
  )
}

export default Home