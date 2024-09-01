import React from 'react'
import './App.css'
import Nextpage from './pages/Nextpage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/next" element={<Nextpage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
