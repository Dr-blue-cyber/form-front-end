import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router'


export default function Login() {
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState(0);


  const [userData, setUserData] = useState({
    userName: "",
    password: ""
  })


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setUserData((prev)=>{
      return {...prev,[name]:value}
    })

  };


  const handleOnLoginClick = async () => {

    try {
      console.log(userData);
      const response = await axios.post("http://localhost:5001/loginValidate/", userData);

      const loginUserData = response.data.data
      console.log(loginUserData);

      if (response.status === 200) {
        navigate('/Home', { state: loginUserData.userName });
      } else {
        setLoginStatus(response.status)
      }

      setUserData({
        userName: "",
        password: ""
      })

    } catch (error) {
      alert("unsuccessful login");

    }


  }

  const handleRegisterClick = () => {
    navigate('/register');
  }

  return (
    <div>

      <div className='position-absolute top-50 start-50 translate-middle grid gap-3 b shadow p-3 mb-5 bg-body rounded' >
        <div style={{ fontSize: '25px', fontWeight: '700', }} className='start-50'>
          Login </div>
        <div className="mb-2">
          <label className='form-label'>UserName: <input type="text" className="form-control border-success" name='userName' value={userData.userName} onChange={handleOnChange} placeholder='user name' /> </label>
        </div>
        <div className="mb-2">
          <label className='form-label'>Password: <input type="text" className="form-control border-success" name="password" value={userData.password} onChange={handleOnChange} placeholder='password' /> </label>
        </div>
        <div className="text-center">
          <button className='btn btn-primary ' onClick={handleOnLoginClick}>Login</button>
        </div>


        <div>
          {(() => {
            if (loginStatus === 201) {
              return (
                <>
              <p className="text-danger fw-bold">Login Unsuccesfull.!</p>
              <div className="text-center shadow p-3 mb-5 bg-body rounded mt-4 ">
              <p className="text-primary fw-bold">If not register please register here</p>
          <button className='btn btn-primary' onClick={handleRegisterClick}>Register</button>
        </div>
        
        </>)
            } else {
              return null;
            }
          })()}
        </div>



      </div>




    </div>
  )
}
