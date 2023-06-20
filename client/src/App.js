import "./App.css";
import Layout from "./Layout";
import IndexPage from "./IndexPage";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;

// Browser Router done
// Importing Rojutes from react--router-dom
// Route imported from rrd
// Change ancor tages to Link from rrd Header.js
