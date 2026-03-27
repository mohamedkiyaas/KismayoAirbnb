import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="text-3xl font-bold text-red-500">
                            KismayoBNB
                        </div>
                    </Link>

                    
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">
                            Stays
                        </Link>
                        <Link to="/experiences" className="text-gray-800 hover:text-gray-600 font-medium">
                            Experiences
                        </Link>
                        <Link to="/search" className="text-gray-800 hover:text-gray-600 font-medium">
                            Search
                        </Link>
                        <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
                            Contact
                        </Link>
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-gray-100">
                            <Globe size={18} />
                            <span>EN</span>
                        </button>
                        <Link to="/signin" className="px-6 py-2 rounded-full hover:bg-gray-100 font-medium">
                            Sign in
                        </Link>
                        <Link to="/create-account" className="btn-primary">
                            Sign up
                        </Link>
                    </div>

                    
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100 rounded">Stays</Link>
                        <Link to="/experiences" className="block px-4 py-2 hover:bg-gray-100 rounded">Experiences</Link>
                        <Link to="/search" className="block px-4 py-2 hover:bg-gray-100 rounded">Search</Link>
                        <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 rounded">Contact</Link>
                        <Link to="/signin" className="block px-4 py-2 hover:bg-gray-100 rounded">Sign in</Link>
                        <Link to="/create-account" className="block px-4 py-2 hover:bg-gray-100 rounded">Sign up</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
