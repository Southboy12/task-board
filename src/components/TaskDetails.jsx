import axios from "axios"
const TaskDetails = ({ filter, tasks, showTasks }) => {
  const uncompletedTask = tasks.filter((task) => task.completed !== true)
  const completedTasks = tasks.filter((task) => task.completed === true)

  const deleteAll = async () => {
    try {
      await axios.delete(`https://task-board-backend-5ij1.onrender.com/api/v1/task`)
      showTasks()
      alert("Task deleted")
    } catch (error) {
      console.log("Delete failed", error); 
    }
  }
  return (
    <>
        <div className="bg-[hsl(235,_24%,_19%)] py-6 rounded-b-xl flex justify-between items-center gap-4 px-6 text-[#9394a5] mb-8">
          { filter === "completed" ? (
            <h2>{`${completedTasks.length} item${completedTasks.length > 1 ? "s" : ""} completed`}</h2>
          ) : (
            <h2>{`${uncompletedTask.length} item${uncompletedTask.length > 1 ? "s" : ""} left`}</h2>
          )}
          <button onClick={deleteAll} className={`cursor-pointer ${filter === "active" ? "hidden" : ""}`}>Clear Completed</button>
        </div> 
    </>
  )
}

export default TaskDetails