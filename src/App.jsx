import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllTask from "./Pages/AllTasks";
import NewTask from "./Pages/NewTask";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-tasks" element={<AllTask />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
