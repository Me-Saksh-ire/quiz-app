import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Content from './pages/Content';
import Dashboard from './pages/Dashboard';
import QuizPage from './pages/QuizPage';
import Result from './pages/Result'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route index path="/subject" element={<Content />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subject/:name/:id" element={<QuizPage />} />
          <Route path="/result" element={<Result />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      
    </div>
  )
}

export default App
