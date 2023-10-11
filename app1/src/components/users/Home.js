import axios from 'axios';
import { useState } from 'react';
import '../../App.css'
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'

export default function Home() {
  const navigate = useNavigate();
  const obj = useLocation();

  const [data, setData] = useState({
    userName: obj.state
  }) 

  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")

  const handleClick = () => {
    navigate('/login')
  }

  const handleViewDetail = async () => {

    try {

      console.log("///////////");
      const response = await axios.post("http://localhost:5001/view/get-user", data);

      // console.log(response.data);
      setFirstName(response.data.data.firstName);
      setUserName(response.data.data.userName);

      console.log(firstName, userName);
      // setDetails({
      //   name: response.data,
      //   userName: response.data,
      // })

      if (response.status === 200) {
        alert("successful");

      }
      else {
        alert("unsuccessful");
      }
    } catch (error) {

    }
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className=' justify-content-center'>
        <h1 className='mx-auto'>User Details</h1>
        <button onClick={handleViewDetail}>View Detail</button>
        <br/>
        <h1 className='mx-auto'>{firstName}</h1>
        <br/>
        <h1 className='mx-auto'>{userName}</h1>

      </div>




    </>

  )
}
