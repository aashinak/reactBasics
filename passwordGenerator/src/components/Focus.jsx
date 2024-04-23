import {useCallback, useEffect, useRef, useState} from "react"
function Focus() {
    const [length,setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [characterAllowed, setCharacterAllowed] = useState(false)
    const [password, setPassword] = useState('')
    
    const passwordRef = useRef(null)

    const generatePassword = useCallback(
      () => {
        let pass =""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str+="0123456789"
        if(characterAllowed) str+="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

        for(let i=1;i<=length;i++){
            const char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)
      },
      [numberAllowed,characterAllowed,length],
    )
    


    useEffect(()=>{
        generatePassword()
    },[length,numberAllowed,characterAllowed,generatePassword])

    const copyPasswordToClipBoard = ()=>{
        window.navigator.clipboard.writeText(password)
        passwordRef.current.select()
    }
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">

        <h1 className="mb-10 text-black-squeeze-50 font-semibold text-2xl select-none">Password Generator</h1>

        <div className="bg-black-squeeze-800  w-1/3 min-w-96 h-1/3 rounded-2xl p-10 shadow-xl flex  items-center flex-col ">

            <div className="flex w-full rounded-xl shadow-2xl gap-2">
                <input ref={passwordRef} type="text" className="w-full outline-none p-2 rounded-xl text-black-squeeze-900 font-medium "  readOnly value={password}/>
                <button className="bg-black-squeeze-400 p-2 rounded-xl 
                w-24 shadow-2xl text-black-squeeze-900 font-medium 
                select-none"
                onClick={copyPasswordToClipBoard} >Copy!</button>
            </div>

            <div className="flex w-full mt-8 gap-5 justify-center">
                <div className="flex gap-1">
                    <input className="cursor-pointer" onChange={(e) => setLength(e.target.value)} type="range" min={6} max={20} value={length} name="" id="" />
                    <label htmlFor="length" className="select-none text-rose-white-400 font-medium" >Length: {length}</label>
                </div>
                
                <div className="flex gap-1">
                    <input type="checkbox" name="number" id="number" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
                    <label htmlFor="number" className="select-none text-rose-white-400" >Numbers</label>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" name="character" id="character" defaultChecked={characterAllowed} onChange={()=>{setCharacterAllowed((prev)=>!prev)}} />
                    <label htmlFor="character" className="select-none text-rose-white-400" >Character</label>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Focus