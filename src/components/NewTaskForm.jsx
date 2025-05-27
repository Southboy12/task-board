import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const formDOM = document.querySelector(".task-form")
const taskInputDOM = document.querySelector(".task-input")


const NewTaskForm = () => {
  const [taskName, setTaskName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskName.trim()) return;

    try {
      await axios.post('https://task-board-backend-5ij1.onrender.com/api/v1/task', { name: taskName })
      setTaskName("")
    } catch (error) {
      console.log("Something went wrong");
    } 
  }
     
  
  return (
    <div>
      <div className="bg-[hsl(235,_24%,_19%)] py-10 rounded-xl flex flex-col items-center gap-4 px-6">
          <h2 className="text-[hsl(236,_9%,_61%)] text-xl font-bold">Task Manager</h2>
          <form onSubmit={handleSubmit} className="task-form w-full flex">
            <input 
              className="task-input bg-[hsl(236,_9%,_61%)] w-9/12 rounded-l-md px-4 focus:outline-none" 
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter a task" />
            <button className="text-[hsl(236,_9%,_61%)] bg-[hsl(220,_30%,_25%)] text-lg py-1 w-3/12 rounded-r-md">Submit</button>
          </form>
      </div>
      <button className="text-white bg-[hsl(236,_9%,_61%)] mt-20 hover:bg-[hsl(236,_9%,_51%)] transition
  rounded-md mx-auto px-12 py-1 flex"><Link to="/">Back to Tasks</Link></button>
    </div>
    
  )
}

export default NewTaskForm