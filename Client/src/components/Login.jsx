import React,{useContext, useState} from 'react';
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
function Login() {
  const navigate=useNavigate()
  const {login}=useContext(AppContext)
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")


  const loginHandler=async(e)=>{
    e.preventDefault();
    const result=await login(email,password)
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
    //console.log(result.data)
    setTimeout(()=>{
      navigate('/')

    },1500)
  }
  return (
    <>
    <ToastContainer
/>
      <div className="container my-5 p-4" style={{
        width:"30%",
        border:"2px solid yellow",
        borderRadius:"10px"
      }}>
        <h2 className='text-center'>Login</h2>
        <form onSubmit={loginHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" required id="exampleInputEmail1" value={email} onChange={(e)=>setemail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" required id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </div>
          <div className="container d-grid col-5">

          <button type="submit" className="btn btn-primary my-3">Login</button>

          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
