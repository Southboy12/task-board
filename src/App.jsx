import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import NewTask from "./Pages/NewTask"
import EditTask from "./Pages/EditTask"

function App() {

  return (
    <BrowserRouter>
      <div className="bg-black h-screen ">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/add-task" element={<NewTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />       
        </Routes>  
      </div>
    </BrowserRouter>
  )
}

export default App
