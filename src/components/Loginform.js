import React from "react";
 


function LoginForm({}){
    return (
        <form>
            <div className = "container">
                <h2>Login Form</h2>
            <div className="container">
                <label for="uname">Name:</label>
                <input type = "text" name = "name" id="name" required></input>
            </div> 
             
            <div className="container">
                <label for="password">Password:</label>
                <input type = "password" name = "password" id="password" required></input>
                
            </div> 
            <button className="cancelbtns" type="submit">Login</button>
             <div className="container" >
             <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
             </div>

            </div>
            
        </form>
    )
}

export default LoginForm;