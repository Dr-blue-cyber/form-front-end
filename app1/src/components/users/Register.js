import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Login from './Login';


function Register() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    userName: "",
    password: "",
    mobileNumber: "",
  })

  const [registrationStatus, setRegistrationStatus] = useState(0);

  const handleLogin = async () => {

    navigate('/Login');
  }

  const handleOnClick = async () => {
    try {



      console.log(userDetails);
      const response = await axios.post("http://localhost:5001/user/register", userDetails);

      setRegistrationStatus(response.status);
      
      setUserDetails({
        name: "",
        userName: "",
        mobileNumber: "",
        password: "",
      })
    }

    catch (error) {
      throw error;
    }
  }


const handleOnChange = ( {target} ) => {
    console.log(target);
  const { name, value } = target;

    switch (name) {
      case "name":
        setUserDetails(prev => ({ ...prev, [name]: value }));
        break;
      case "userName":
        setUserDetails(prev => ({ ...prev, [name]: value }));
        break;
      case "password":
        setUserDetails(element => ({ ...element, [name]: value }));
        break;
      case "mobileNumber":
        setUserDetails(prev => ({ ...prev, [name]: value }));
        break;
      default:
        break;
    }

  }


  return (
    <>
      <div >

        <div className='position-absolute top-50 start-50 translate-middle grid gap-3 b'>
            <div style={{ fontSize: '25px', fontWeight: '700', }} className='start-50'> Register </div>
          <div className="mb-2">
            <label className='form-label'>
              Name:
              <input className="form-control border-success" type="text" name="name" placeholder='name' value={userDetails.name} onChange={handleOnChange} />
            </label>
          </div>

          <div className="mb-2">
            <label className='form-label'>
              User Name:&nbsp;
              <input className="form-control border-success" type="text" name="userName" placeholder=' enter your username' value={userDetails.userName} onChange={handleOnChange} />
            </label></div>

          <div className="mb-2">
            <label className='form-label'>
              Password:
              <input className="form-control border-success" type="password" name="password" placeholder='Enter your password' value={userDetails.password} onChange={handleOnChange} />
            </label>
          </div>

          <div className="mb-2">
            <label className='form-label'>
              mobileNumber:
              <input className="form-control border-success" type="Number" name="mobileNumber" placeholder='Enter your mobileNumber' value={userDetails.mobileNumber} onChange={handleOnChange} />
            </label>
          </div>
          
          <div>
          {(() => {
            if (registrationStatus === 200) {
              return <p className="text-success fw-bold">Registration Succesfull.!</p>
            } else if (registrationStatus) {
              return <p className="text-danger fw-bold">Not Registered. This username already exist...</p>
            } else {
              return null;
            }
          })()}
        </div>

          <div className='btn-toolbar ' role='toolbar'>
            <div className='d-incline p-2'> <button className='btn btn-primary' onClick={handleOnClick}>Register</button> </div>
            <div className='d-incline p-2'>

              <button className='btn btn-primary' onClick={handleLogin}>Login</button>

            </div>

          </div>
        </div>
 
      </div>

    </>
  )
}

export default Register