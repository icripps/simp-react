import React, {useState} from "react"
import classes from "./Form.module.css"

const Form = () => {
    const assigned = [classes.green,classes.blue,classes.red]
    const [btncolor,setbtncolor] = useState('')
    const [counter,setcounter] = useState(0)
    const changeColor = () =>{ 
        setbtncolor(assigned[counter])
        setcounter(counter+1)
        if (counter>2) {
            setcounter(0)
        }
    }
    return (
        <div className={classes.Form} >
            <form >
                    <h2>Login Form</h2>
                    <label  >Username:</label>
                    <input type="text" placeholder="Enter Username" /><br/>
                    <label  >Password:</label>
                    <input type="password" placeholder="enter pass" /><br/>
            </form>
            <button className={btncolor} type="submit" value="Login"  onClick={changeColor}>Login</button>
          </div>
    )
}

export default Form