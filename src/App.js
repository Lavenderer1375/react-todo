import Layout from "./Components/Layout";
import Home from "./Pages/Home.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TodoList from "./Pages/ToDoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardProvider from "./Components/UI/Cards/Cardscontext";
import CheckProvider from "./Components/UI/Cards/CheckContext";
import Deletecontext from "./Components/UI/Cards/Deletecontext";

function App() {
  return (
    <Deletecontext>
      <CheckProvider>
        <CardProvider>
          <div className="bg-slate-300">
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/todolist" element={<TodoList />} />
                </Routes>
              </Layout>
            </Router>
          </div>
        </CardProvider>
      </CheckProvider>
    </Deletecontext>
  );
}

export default App;
