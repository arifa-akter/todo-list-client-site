import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Task from "./component/Task";
import ToDo from "./component/ToDo";
import Calender from "./component/Calendar"
import Edit from "./component/Edit";

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path="/" element={<Task></Task>}></Route>
      <Route path="/toDo" element={<ToDo></ToDo>}></Route>
      <Route path="/calender" element={<Calender></Calender>}></Route>
      <Route path="/edit" element={<Edit></Edit>}></Route>
     </Routes>
    </div>
  );
}

export default App;
