import { useState } from "react"
import AddTask from "../components/AddTask"
import Task from "../components/Task"
import TaskDetails from "../components/TaskDetails"
import TaskFilter from "../components/TaskFilter"
import { useEffect } from "react"
import { useMemo } from "react"



const Home = () => {
    const [tasks, setTasks] = useState([])
    const [filter, setFilter] = useState("all")
    const [filteredTask, setFilteredTask] = useState([]) 
    

   
    const showTasks = async () => {
        try {            
            const response = await fetch('http://localhost:3000/api/v1/task')
            const data = await response.json()  
            setTasks(data.data)        
        } catch (error) {
            console.log('An error occured'); 
        }
    }

    useEffect(() => {
        showTasks()
    }, [])

    useEffect(() => {
        if (tasks) {
             let result = tasks
            if (filter === "active") result = tasks.filter(task => !task.completed)
            else if (filter === "completed") result = tasks.filter(task => task.completed)
            setFilteredTask(result)
        }
       
    }, [tasks, filter])



    const handleDelete = (deleteId) => {
        setTasks((prev) => prev.filter((task) => task._id !== deleteId))
    }
    
    return (
        <>
            <div className="lg:bg-[url(/images/bg-desktop-dark.jpg)] lg:h-[50vh] bg-[url(/images/bg-mobile-dark.jpg)] bg-cover h-[33vh]">
                <div className="max-w-screen-md mx-auto px-8 pt-16">
                    <div className="">
                        <div className="flex justify-between items-center mb-15">
                            <h1 className="text-white text-5xl tracking-[1rem] font-bold">TODO</h1>
                            <img className="w-10 h-10 cursor-pointer" src="/images/icon-sun.svg" alt="sun" />
                        </div>
                        <AddTask />
                        <Task tasks={filteredTask} onDelete={handleDelete} />
                        <TaskDetails filter={filter} tasks={tasks} showTasks={showTasks} />
                        <TaskFilter filter={filter} setFilter={setFilter} />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Home