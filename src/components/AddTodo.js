import react from "react"

const AddTodo =() =>{

    function handleTodo(){
        alert('add todo')
    } 
    return (
        <div>
            <input />
            <button onClick={handleTodo}>Add Todo</button>
        </div>
    )
}

export default AddTodo