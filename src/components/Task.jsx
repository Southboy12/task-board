
const Task = () => {
  return (
    <>
        <div className="bg-[hsl(235,_24%,_19%)] py-6 rounded-t-xl flex items-center gap-4 px-6">
            <div className="border w-8 h-8 rounded-full border-[hsl(235,_19%,_35%)]"></div>
            <h2 className="text-[hsl(236,_9%,_61%)] text-lg w-9/12">Completed online Javascript course</h2>
            <img className="w-6 h-6" src="/images/icon-cross.svg" alt="" />
        </div>
        <div className="border w-full border-[hsl(235,_19%,_35%)]"></div>
    </>
  )
}

export default Task