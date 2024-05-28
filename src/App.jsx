import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../src/pages/Login"
import Content from "../src/pages/Content"


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/content/*" element={<Content />} />
      </Routes>
    </Router>
  )
}
