import { useRef, useState } from "react"

export default function Ref(){
    // useref -
    let username="pawan"
    let pass="pawan@123"

    let myref=useRef("")
    let passref=useRef("")
    const [user,setUser]=useState("")

    function getSubmit(){
    if(myref.current === username && passref.current === pass){
    setUser("Login Successful")
    } else {
     setUser("Invalid username or password")
    }
    }

   return <>
    <input type="text" name="" id=""  placeholder="Enter your name...." ref={myref}/>
    <input type="password" name="" id="" placeholder="Enter your password" ref={passref} />
    <button onClick={()=>{getSubmit()}}>LOGIN</button>
    <h1>{user}</h1>
   </>
}
