import React, { useState } from 'react'
import { MapPin, Calendar, Users, Star, Heart, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Experiences() {
    const navigate = useNavigate()
    const [activitySearch, setActivitySearch] = useState('')
    const [locationSearch, setLocationSearch] = useState('')

    const handleExperienceSearch = (e) => {
        e.preventDefault()
        const params = new URLSearchParams()
        if (activitySearch) params.append('activity', activitySearch)
        if (locationSearch) params.append('location', locationSearch)
        navigate(`/search?${params.toString()}`)
    }
    const experiences = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
            title: 'Surfing Lesson',
            location: 'Kismayo, Somalia',
            price: '$85',
            priceUnit: '/person',
            rating: 4.9,
            reviews: 342,
            duration: '2 hours',
            groupSize: 'Up to 6 people',
            description: 'Learn to surf with an expert instructor on one of Kismayo\'s most beautiful beaches.'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1519821172141-bcf68ed08ae2?auto=format&fit=crop&w=1600&q=80',
            title: 'Wine Tasting Tour',
            location: 'Kismayo, Somalia',
            price: '$120',
            priceUnit: '/person',
            rating: 4.8,
            reviews: 287,
            duration: '3 hours',
            groupSize: 'Up to 12 people',
            description: 'Explore premium wineries and taste some of the finest wines in the world.'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
            title: 'Beach Hiking Adventure',
            location: 'Kismayo, Somalia',
            price: '$65',
            priceUnit: '/person',
            rating: 4.7,
            reviews: 198,
            duration: '4 hours',
            groupSize: 'Up to 8 people',
            description: 'Guided hike through breathtaking coastal trails with stunning panoramic views.'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1514575110854-f3dc30c979bc?auto=format&fit=crop&w=1600&q=80',
            title: 'Cooking Class - Somali Cuisine',
            location: 'Kismayo, Somalia',
            price: '$95',
            priceUnit: '/person',
            rating: 4.9,
            reviews: 421,
            duration: '3 hours',
            groupSize: 'Up to 10 people',
            description: 'Learn traditional Somali cooking from a local chef in a charming Kismayo kitchen.'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
            title: 'Yoga & Meditation Retreat',
            location: 'Kismayo, Somalia',
            price: '$75',
            priceUnit: '/person',
            rating: 4.8,
            reviews: 256,
            duration: '2.5 hours',
            groupSize: 'Up to 15 people',
            description: 'Rejuvenate your mind and body with yoga and meditation in a beautiful coastal setting.'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
            title: 'Scuba Diving Expedition',
            location: 'Kismayo, Somalia',
            price: '$150',
            priceUnit: '/person',
            rating: 4.9,
            reviews: 389,
            duration: '4 hours',
            groupSize: 'Up to 6 people',
            description: 'Explore the vibrant underwater world of Kismayo with experienced guides.'
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Unique Experiences</h1>
                    <p className="text-xl text-red-100 mb-8">Discover unforgettable activities hosted by locals around the world</p>

                    
                    <form onSubmit={handleExperienceSearch} className="bg-white text-gray-900 rounded-3xl shadow-lg p-6 max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2">
                                <Activity size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">ACTIVITY</p>
                                    <input
                                        type="text"
                                        placeholder="What interests you?"
                                        value={activitySearch}
                                        onChange={(e) => setActivitySearch(e.target.value)}
                                        className="outline-none font-semibold text-sm w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin size={20} className="text-gray-400" />
                                <div>
                                    <p className="text-xs text-gray-500">LOCATION</p>
                                    <input
                                        type="text"
                                        placeholder="Kismayo"
                                        value={locationSearch}
                                        onChange={(e) => setLocationSearch(e.target.value)}
                                        className="outline-none font-semibold text-sm w-full"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="bg-red-500 text-white rounded-full px-8 py-2 font-bold hover:bg-red-600 transition">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition cursor-pointer">
                            
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className="w-full h-full object-cover"
                                />
                                <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
                                    <Heart size={20} className="text-gray-700" />
                                </button>
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {experience.duration}
                                </div>
                            </div>

                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                                <p className="text-gray-600 text-sm mb-3 flex items-center">
                                    <MapPin size={16} className="mr-1" />
                                    {experience.location}
                                </p>

                                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{experience.description}</p>

                                
                                <div className="border-t border-gray-200 pt-4 mb-4">
                                    <p className="text-sm text-gray-600 mb-2">
                                        <span className="font-semibold">Group Size:</span> {experience.groupSize}
                                    </p>
                                </div>

                                
                                <div className="flex items-center space-x-1 mb-4">
                                    <Star size={16} className="fill-gray-900 text-gray-900" />
                                    <span className="font-semibold text-gray-900">{experience.rating}</span>
                                    <span className="text-gray-600 text-sm">({experience.reviews})</span>
                                </div>

                                
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900">{experience.price}</p>
                                        <p className="text-gray-600 text-xs">{experience.priceUnit}</p>
                                    </div>
                                    <button className="btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Outdoor', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Culinary', img: 'https://images.unsplash.com/photo-1479942659826-a753dd2a36c1?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Wellness', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Arts & Culture', img: 'https://images.unsplash.com/photo-1514575110854-f3dc30c979bc?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Adventure', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Sports', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Music', img: 'https://images.unsplash.com/photo-1489731610824-3c1b0e4643fd?auto=format&fit=crop&w=1600&q=80' },
                            { name: 'Photography', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80' }
                        ].map((category) => (
                            <div key={category.name} className="text-center cursor-pointer hover:scale-105 transition">
                                <div className="relative h-40 rounded-2xl overflow-hidden mb-4 group">
                                    <img src={category.img} alt={category.name} className="w-full h-full object-cover group-hover:brightness-110 transition" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">{category.name}</span>
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
