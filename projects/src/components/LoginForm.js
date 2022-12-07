import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usersData from "../database/allUsers";
// import AUTH_ACTION_TYPES from '../store/actions/action';
import { authActions } from "../features/counter/authSlice";

const Login = () => {
  const mobile = useSelector((state) => {
    return state.mobile;
  });
  const [loginData, setLoginData] = useState({});
  const dispatching = useDispatch();

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
      // let information_or_action = {
      //     "type": "LOGIN",
      //     "payload": {
      //         ...result[0]
      //     }
      // }

      // dispatching(information_or_action)
      dispatching(authActions.login({ ...result[0] }));
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
