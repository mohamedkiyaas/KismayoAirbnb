import React, { useState } from 'react'
import { Search as SearchIcon, MapPin, Calendar, Users, Star, Heart } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Stay() {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [guests, setGuests] = useState('1')

    const stays = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
            title: 'Cozy Downtown Apartment',
            location: 'Kismayo, Somalia',
            price: '$120/night',
            rating: 4.8,
            reviews: 128,
            isFavorite: false
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
            title: 'Beachfront Villa',
            location: 'Kismayo, Somalia',
            price: '$250/night',
            rating: 4.9,
            reviews: 256,
            isFavorite: false
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
            title: 'Mountain Cabin',
            location: 'Kismayo, Somalia',
            price: '$95/night',
            rating: 4.7,
            reviews: 89,
            isFavorite: false
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80',
            title: 'Modern Studio',
            location: 'Kismayo, Somalia',
            price: '$150/night',
            rating: 4.8,
            reviews: 195,
            isFavorite: false
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1560448204-46e1b4a87373?auto=format&fit=crop&w=1600&q=80',
            title: 'Historic Brownstone',
            location: 'Kismayo, Somalia',
            price: '$140/night',
            rating: 4.6,
            reviews: 142,
            isFavorite: false
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
            title: 'Luxury Penthouse',
            location: 'Kismayo, Somalia',
            price: '$325/night',
            rating: 4.9,
            reviews: 312,
            isFavorite: false
        },
    ]
    

    const handleSearch = (e) => {
        e.preventDefault()
        const params = new URLSearchParams()
        if (location) params.append('location', location)
        if (checkIn) params.append('checkIn', checkIn)
        if (checkOut) params.append('checkOut', checkOut)
        if (guests) params.append('guests', guests)
        navigate(`/search?${params.toString()}`)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="bg-white py-12 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Not sure where to go? Perfect.
                    </h1>

                    
                    <form onSubmit={handleSearch} className="bg-white rounded-3xl shadow-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            
                            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                                <MapPin size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">WHERE</p>
                                    <input
                                        type="text"
                                        placeholder="Search destinations"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="outline-none font-semibold text-gray-900 w-full"
                                    />
                                </div>
                            </div>

                            
                            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                                <Calendar size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">CHECK IN</p>
                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="outline-none font-semibold text-gray-900 w-full"
                                    />
                                </div>
                            </div>

                            
                            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-4">
                                <Calendar size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">CHECK OUT</p>
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="outline-none font-semibold text-gray-900 w-full"
                                    />
                                </div>
                            </div>

                            
                            <div className="flex items-center space-x-2 border-b md:border-b-0 pb-4 md:pb-0">
                                <Users size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">GUESTS</p>
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(e.target.value)}
                                        className="outline-none font-semibold text-gray-900 w-full bg-transparent"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map(num => (
                                            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            
                            <button
                                type="submit"
                                className="bg-red-500 text-white rounded-full px-8 py-3 font-bold hover:bg-red-600 transition flex items-center justify-center space-x-2"
                            >
                                <SearchIcon size={20} />
                                <span className="hidden md:inline">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stays</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stays.map((stay) => (
                        <Link key={stay.id} to={`/search?stay=${stay.id}`}>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition cursor-pointer">
                                
                                <div className="relative h-64 overflow-hidden">
                                    <img src={stay.image} alt={stay.title} className="w-full h-full object-cover" />
                                    <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
                                        <Heart size={20} className={stay.isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"} />
                                    </button>
                                </div>

                                
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 flex-1">{stay.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">{stay.location}</p>

                                    
                                    <div className="flex items-center space-x-1 mb-3">
                                        <Star size={16} className="fill-gray-900 text-gray-900" />
                                        <span className="font-semibold text-gray-900">{stay.rating}</span>
                                        <span className="text-gray-600 text-sm">({stay.reviews})</span>
                                    </div>

                                    <p className="text-gray-900 font-semibold">{stay.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Mountain', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'City', img: 'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Countryside', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Luxury', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Budget', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Unique', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Family', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80' },
                        ].map((category) => (
                            <div key={category.name} className="text-center cursor-pointer hover:scale-105 transition">
                                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 group">
                                    <img src={category.img} alt={category.name} className="w-full h-full object-cover group-hover:brightness-110 transition" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition flex items-center justify-center">
                                        <span className="text-white text-2xl font-bold">{category.name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
