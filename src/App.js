 import './App.css';
 import React, { useState } from 'react';
 import LoginForm from './components/Loginform';

function App() {

  const adminuser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user , setUser] = useState({name: "" , email: ""});
  const [error , setError] = useState("");

  const login = details => {
    console.log(details);
  }

  const logout = () => {
    console.log("Logout")
  }


  return (
    <div className="App">
      {(user.email != "")? (
        <div className = "welecome">
          <h2>Welecome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} error = {error}/>
      )}
    </div>
  );
}

export default App;
