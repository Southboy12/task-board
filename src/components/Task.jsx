import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const Task = ({ tasks, onDelete }) => {

  const handleDelete = async (taskId) => {

    try {
      await axios.delete(`https://task-board-backend-5ij1.onrender.com/api/v1/task/${taskId}`)
      onDelete(taskId)
      alert("Task deleted")
    } catch (error) {
      console.log("Delete failed", error); 
    }
  }
  
  return (
    <>
      {tasks.length === 0 ? (
        <div className="bg-[hsl(235,_24%,_19%)] py-6 border-b border-b-[hsl(235,_19%,_35%)]">
          <p className="text-[hsl(236,_9%,_61%)] text-lg px-6">No task available</p>
        </div>
        
      ) : (
        tasks.map((task, index) => (
          <div key={task._id}>
            <div className={`bg-[hsl(235,_24%,_19%)] py-6 flex items-center gap-4 px-6 cursor-pointer ${index === 0 ? "rounded-t-xl" : ""}`}>
                <div className={`border w-8 h-8 rounded-full border-[hsl(235,_19%,_35%)] flex justify-center items-center ${task.completed ? "bg-[linear-gradient(to_right,_hsl(192,_100%,_67%),_hsl(280,_87%,_65%))]" : ""}`}>
                  <img className={`${task.completed ? "" : "hidden"}`} src="/images/icon-check.svg" alt="" />
                </div>
                <Link to={`/edit-task/${task._id}`} className="w-9/12">
                  <h2 className={`text-[hsl(236,_9%,_61%)] text-lg ${task.completed ? "line-through" : ""}`}>{task.name}</h2>
                </Link>
                <img onClick={() => handleDelete(task._id)} className="w-6 h-6 ml-auto" src="/images/icon-cross.svg" alt="delete" />
            </div>
            <div className="border w-full border-[hsl(235,_19%,_35%)]"></div>
          </div>
        ))
      )}
      
    </>
  )
}

export default Task