
const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="bg-[hsl(235,_24%,_19%)] py-6 rounded-xl mb-8">
        <div className="text-[hsl(236,_9%,_61%)] text-xl font-bold flex justify-center items-center gap-8">
          <button onClick={() => setFilter("all")} className={`${filter === "all" ? "text-[hsl(220,_98%,_61%)]" : ""} cursor-pointer`}>All</button>
          <button onClick={() => setFilter("active")} className={`${filter === "active" ? "text-[hsl(220,_98%,_61%)]" : ""} cursor-pointer`}>Active</button>
          <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "text-[hsl(220,_98%,_61%)]" : ""} cursor-pointer`}>Completed</button>
        </div>
    </div>
  )
}

export default TaskFilter