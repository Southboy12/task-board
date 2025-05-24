
const TaskFilter = () => {
  return (
    <div className="bg-[hsl(235,_24%,_19%)] py-6 rounded-xl mb-8">
        <div className="text-[hsl(236,_9%,_61%)] text-xl font-bold flex justify-center items-center gap-8">
          <button className="text-[hsl(220,_98%,_61%)]">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
    </div>
  )
}

export default TaskFilter