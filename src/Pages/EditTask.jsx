import EditTaskForm from "../components/EditTaskForm"


const EditTask = () => {
  return (
    <>
        <div className="lg:bg-[url(/images/bg-desktop-dark.jpg)] lg:h-[50vh] bg-[url(/images/bg-mobile-dark.jpg)] bg-cover h-[33vh]">
            <div className="max-w-screen-md mx-auto px-8 pt-16">
                <div className="">
                    <div className="flex justify-between items-center mb-15">
                        <h1 className="text-white text-5xl tracking-[1rem] font-bold">TODO</h1>
                        <img className="w-10 h-10" src="/images/icon-sun.svg" alt="sun" />
                    </div>
                    <EditTaskForm />                  
                </div>
            </div>
        </div>
    </>
  )
}

export default EditTask