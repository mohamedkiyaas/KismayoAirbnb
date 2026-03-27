import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Stay from './pages/Stay'
import Search from './pages/Search'
import Experiences from './pages/Experiences'
import SignIn from './pages/SignIn'
import CreateAccount from './pages/CreateAccount'
import Contact from './pages/Contact'

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-white">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Stay />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}
