import React, {useState} from "react"

const Todo = () => {
    const [todoName,setTodoName] = useState(' ')

    const inputHandler = event => {
        setTodoName(event.target.value)
    }
 return <React.Fragment>
     <input type="text" placeholder="Todo" value={todoName} onChange={inputHandler} />
     <button type="button">Add</button>
     <ul>

     </ul>
 </React.Fragment>
}

export default Todo