import React from "react"
import classes from "./Form.module.css"

const Form = () => {
    return (
        <div className={classes.Form} >
            <form >
                    <h2>Login Form</h2>
                    <label for="uname" >Username:</label>
                    <input type="text" placeholder="Enter Username" ><br/>
                    <label for="upass" >Password:</label>
                    <input type="password" placeholder="enter pass"><br/>
                    
                    <button type="submit" value="Login"  id="submit" onClick={handleForm}>Login</button>
                    
                    <a href="register.html">New Member</a>
                    
            </form>
          </div>
    )
}

export default Form