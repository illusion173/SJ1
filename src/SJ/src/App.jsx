import { useState } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Navbar from "./Navbar.jsx";
import awsExports from "./aws-exports";
import Home from "./Home.jsx";
import Worldmap from "./Worldmap.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import "./App.css";
//Front Page
Amplify.configure(awsExports);
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worldmap" element={<Worldmap />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <div>Work in Progress</div>
    </>
  );
}

export default App;
