import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    
                    <div>
                        <h3 className="text-2xl font-bold text-red-500 mb-4">KismayoBNB</h3>
                        <p className="text-gray-400">Your trusted platform for booking unique stays and experiences worldwide.</p>
                    </div>

                    
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white">Stays</a></li>
                            <li><a href="/experiences" className="hover:text-white">Experiences</a></li>
                            <li><a href="/search" className="hover:text-white">Search</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Safety</a></li>
                            <li><a href="#" className="hover:text-white">Terms</a></li>
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center space-x-2">
                                <Phone size={18} />
                                <span>+252 (615) 000-0000</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={18} />
                                <span>support@kismayobnb.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={18} />
                                <span>Kismayo, Somalia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
                    <p className="text-gray-400">&copy; 2024 KismayoBNB. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-red-500"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-red-500"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-red-500"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
