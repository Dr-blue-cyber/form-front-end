import axios from 'axios';
import React, { useState } from 'react'

export const Update = () => {
  const [data,setData] = useState({
    userName: "",
    password: "", 
    pass1: "",
    pass2: ""
  })

  const handleOnChange = ({target})=>{
    const [name, value] = target
    setData((prev)=>{
      return {...prev, [name]:value}
    });
  };
  console.log(data);

  const handleOnClick =  (E) => {
    try {

      // const response = await axios.post('http://localhost:5001/user/update', data);
      console.log(E.target)
      if (E) {
        E.target = <h1>Update succes</h1>
        return (
          <h1>Update succes</h1>
        )
      } else {
        return (
          <h1>Update not </h1>
        )
      } 

      setData({
        userName: "",
        password: "",   
        pass1: "",
        pass2: ""
      })
    } catch (error) {

    }

  }

  return (
    <>
    <h1>Update</h1>
    <br /> 
    <label htmlFor="">User Name: <input type="text" name='userName' value={data.userName} onChange={handleOnChange} /></label><br /><br /> 
    <label htmlFor="">Old Password:</label> <input type="text" name='password'  value={data.password} onChange={handleOnChange}/><br /><br /> 
    <label htmlFor="">New Password:</label> <input type="text" name='pass1' value={data.pass1} onChange={handleOnChange}/><br /><br /> 
    <label htmlFor="">New Password:</label> <input type="text" name='pass2' value={data.pass2} onChange={handleOnChange}/><br /><br /> 

    <div className='ml-5'>
    <button className="btn btn-primary " onClick={handleOnClick}>Submit</button>
    </div>
    </>
  )
}