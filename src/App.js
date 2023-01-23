import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect} from "react";
import axios from "axios";
import GlobalStyle from "./components/styled/global.js"
import { Container } from "./components/styled/AppS.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/layout/NavBar.js";
import Home from "./components/Pages/Home.js";
import Form from "./components/layout/Form.js"
import Containers from "./components/Pages/Containers.js";
import About from "./components/Pages/About.js";


export default function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (err) {
      try {
        toast.error(err.response.data.msg);
      } catch {
        toast.error(err.toString());
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Router>
        <Container>
          <NavBar />

        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/containers" element={<Containers setOnEdit={setOnEdit} users={users} setUsers={setUsers} />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />} />
        </Routes>
        
        </Container>
        
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
        <GlobalStyle />
      </Router>
    </>
  )
}