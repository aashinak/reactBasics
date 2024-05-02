// import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

function Github() {
    // const [data, setData] = useState({})

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/aashinak`)
    //     .then((res)=> res.json())
    //     .then((res)=> setData(res))
    //     console.log(data);
    // },[])

    const data = useLoaderData()
  return (
    <div className="p-10 flex items-center justify-between w-1/3">
        <img src={data.avatar_url} width={300} className="rounded-full" />
        <div>
          <h1>{data.name}</h1>
          <h2>Following : {data.following}</h2>
        </div>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const res = await fetch(`https://api.github.com/users/aashinak`)
  return res.json()
}