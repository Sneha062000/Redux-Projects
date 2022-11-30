import React, { useState } from "react";
import { useDispatch } from "react-redux";
import usersData from "../database/allUsers";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    // - if his/her email id & password is correct, then we will set redux's loggedInUser state
    // - else do nothing

    let result = usersData.allUsers.filter((user) => {
      return (
        user.email === loginData.email && user.password === loginData.password
      );
    });

    // result = [{"email": "kiran@gmail.com", "password": "pass"}]
    // result[0] = {"email": "kiran@gmail.com", "password": "pass"}

    if (result[0]) {
      // email id and password is correct
      let information_or_action = {
        type: "SET_LOGIN_DATA",
        payload: {
          ...result[0],
        },
      };

      dispatch(information_or_action);
    } else {
      // incorrect
      alert("Failed to Login");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) =>
            setLoginData({ ...loginData, email: event.target.value })
          }
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) =>
            setLoginData({ ...loginData, password: event.target.value })
          }
        />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
