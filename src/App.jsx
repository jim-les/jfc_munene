import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Pages imports 
import Login from './pages/Auth/Login';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App
