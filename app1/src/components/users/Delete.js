import axios from "axios";
import React, { useState } from "react";

const UserDelete = () => {
  const [delStatus, setDeleteStatus] = useState(0);

  const [formData, setFormData] = useState({
    userName: '',
    firstName: ''
  });
  console.log(formData.userName);
  console.log(formData.firstName);


  const handleOnChange = ({ target }) => {
    const [name, value] = target
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleDeleteButton = async () => {
    try {
      const response = await axios.post('http://localhost:5001/user/delete', formData);

      setDeleteStatus(response.status === 200 ? 200 : 201)

      setFormData({
        firstName: "",
        userName: ""
      })
    } catch (error) {
    }

  }

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle grid gap-3 b">
        <div>
          <p className="fw-bold"> <h5> <strong><u> Enter the User Details to Delete </u></strong> </h5></p>
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="">
            <strong>First Name : </strong>
          </label>{" "}
          <input
            onChange={handleOnChange}
            className="form-control border-success"
            type="text"
            name="firstName"
            value={formData.firstName}
            id=""
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="">
            <strong>User Name : </strong>
          </label>{" "}
          <input
            onChange={handleOnChange}
            className="form-control border-success"
            type="text"
            name="userName"
            value={formData.userName}
            id=""
          />
        </div>
        <div>
          
          {delStatus === 200 && <p className="text-success fw-bold">User successful Deleted</p>}
          {delStatus === 201 && <p className="text-danger fw-bold">User Not Found in DataBase</p>}
         
        </div>

        <div>
          <br />
          <button className="btn btn-danger btn" onClick={handleDeleteButton}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default UserDelete;
