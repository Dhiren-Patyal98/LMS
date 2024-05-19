import { useState } from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import axios from "axios";

const PublicRoutes = () =>{
  const[auth , setauth] = useState(false)
  const [loading , setLoading] = useState(true)
  axios.post("http://127.0.0.1:4000/checkuser").then((res)=>{
    setauth(res.data)
    setLoading(false)
  })
console.log(auth) 
  return(
   loading ? <h1>Loading</h1> : <>
  
   {auth ? <Navigate to="/dash"></Navigate> : <Outlet />  }
   </> 
  )
}

export default PublicRoutes;