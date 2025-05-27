import { Link } from 'react-router-dom'

const AddTask = () => {
  return (
    <Link to='/add-task' className="bg-[hsl(235,_24%,_19%)] py-6 rounded-xl flex items-center gap-4 px-6 mb-8 cursor-pointer">
        <div className="border w-8 h-8 rounded-full border-[hsl(235,_19%,_35%)]"></div>
        <h2 className="text-[hsl(236,_9%,_61%)] text-lg">Create a new todo...</h2>
    </Link>
  )
}

export default AddTask