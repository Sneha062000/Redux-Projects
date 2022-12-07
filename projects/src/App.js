// import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import Counter from "./components/counter";

// steps -
// list of registered users -
// login form - email, pass
// once logged in, redirect him to the dashboard
// if not logged in, redirect him to the home page

// requirements-
// logged in user information should be saved in redux

function App() {
  const loggedInUser = useSelector((state) => {
    return state.auth.loggedInUser;
  });

  return (
    <>
      {loggedInUser ? (
        <Dashboard />
      ) : (
        <>
          {" "}
          <Home />
          <LoginForm />
        </>
      )}

      <p>----------------------------------------------------------</p>
      <Counter />
    </>
  );
}

export default App;
