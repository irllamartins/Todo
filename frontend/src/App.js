import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import { Routes, Route } from "react-router-dom"
import About from "./about/about"
import Todo from "./todo/todo"

function App() {
  return (

      <Routes>
        <Route path="*"  element={<Todo />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
