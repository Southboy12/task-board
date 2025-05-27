import { useState } from "react"
import { Link, useParams } from "react-router-dom"

import axios from 'axios'
import { useEffect } from "react"




const EditTaskForm = () => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    taskId: "",
    name: "",
    completed: false
  })  

  useEffect(() => {
    const fetchTask = async () => {  

      try {      
        const {
          data: { task }
        } = await axios.get(`http://localhost:3000/api/v1/task/${id}`)
        const { name, completed, _id: taskId} = task
        setFormData({ name: name, completed: completed, taskId: taskId })
      } catch (error) {
        console.log('Failed to fetch task', error); 
      }
    }
    fetchTask()
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.patch(`http://localhost:3000/api/v1/task/${id}`, formData)
      alert("Task updated")
    } catch (error) {
      console.log("Update failed", error); 
    }
  }
  return (
    <>
      <div className="bg-[hsl(235,_24%,_19%)] py-10 rounded-xl flex flex-col items-center gap-8 px-6">
          <h2 className="text-[hsl(236,_9%,_61%)] text-xl font-bold [word-spacing:0.5rem] tracking-widest">Edit Task</h2>
          <form onSubmit={handleSubmit} className="text-[hsl(236,_9%,_61%)] w-full flex flex-col">
            <div className="mb-4 flex gap-20">
              <label className="" htmlFor="">Task ID</label>
              <span className="flex-1" htmlFor="">{formData.taskId}</span>
            </div>
            <div className="mb-4 flex gap-22">
              <label className="" htmlFor="">Name</label>
              <input 
              className="rounded-md px-2 focus:outline-none border flex-1" 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}/>
            </div>
            <div className="mb-4 flex gap-13">
              <label htmlFor="">Completed</label>
              <input 
              id="completed"
              name="completed"
              type="checkbox"
              checked={formData.completed}
              onChange={handleChange} />
            </div>
            <button  className="py-1 tracking-wider bg-[hsl(220,_30%,_25%)] rounded-md cursor-pointer">Edit</button>
          </form>
      </div>
      <button className="text-white bg-[hsl(236,_9%,_61%)] mt-20 hover:bg-[hsl(236,_9%,_51%)] transition
 rounded-md mx-auto px-12 py-1 flex"><Link to="/">Back to Tasks</Link></button>
    </>
    
  )
}

export default EditTaskForm