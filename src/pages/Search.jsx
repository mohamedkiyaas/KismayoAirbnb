import React, { useEffect, useMemo, useState } from 'react'
import { MapPin, Calendar, Users, Star, Heart, Filter } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [showFilters, setShowFilters] = useState(false)
    const [location, setLocation] = useState(searchParams.get('location') || 'Kismayo')
    const [checkIn, setCheckIn] = useState(searchParams.get('checkIn') || '')
    const [checkOut, setCheckOut] = useState(searchParams.get('checkOut') || '')
    const [guests, setGuests] = useState(searchParams.get('guests') || '1')
    const [priceRange, setPriceRange] = useState(500)
    const [rating, setRating] = useState(3)
    const [filteredResults, setFilteredResults] = useState([])

    const searchResults = useMemo(() => [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1499933374294-4584851497d8?auto=format&fit=crop&w=1600&q=80',
            title: 'Luxury Brooklyn Townhouse',
            location: 'Kismayo, Somalia',
            price: '$180',
            priceUnit: '/night',
            rating: 4.9,
            reviews: 234,
            roomType: 'Entire apartment',
            bedrooms: 3,
            bathrooms: 2,
            amenities: ['WiFi', 'Kitchen', 'AC', 'Parking']
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1600&q=80',
            title: 'Spacious Manhattan Flat',
            location: 'Kismayo, Somalia',
            price: '$220',
            priceUnit: '/night',
            rating: 4.7,
            reviews: 189,
            roomType: 'Entire apartment',
            bedrooms: 2,
            bathrooms: 1,
            amenities: ['WiFi', 'Washer', 'Dryer', 'TV']
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1473627338225-63e2bbf7f6f7?auto=format&fit=crop&w=1600&q=80',
            title: 'Charming Upper West Side Loft',
            location: 'Kismayo, Somalia',
            price: '$150',
            priceUnit: '/night',
            rating: 4.8,
            reviews: 156,
            roomType: 'Entire apartment',
            bedrooms: 2,
            bathrooms: 1.5,
            amenities: ['WiFi', 'Kitchen', 'Workspace']
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
            title: 'Modern Studio in East Village',
            location: 'Kismayo, Somalia',
            price: '$120',
            priceUnit: '/night',
            rating: 4.6,
            reviews: 142,
            roomType: 'Entire apartment',
            bedrooms: 1,
            bathrooms: 1,
            amenities: ['WiFi', 'Kitchen', 'Heating']
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1465695952264-8b8f49d8f41f?auto=format&fit=crop&w=1600&q=80',
            title: 'Sophisticated Park Avenue Room',
            location: 'Kismayo, Somalia',
            price: '$95',
            priceUnit: '/night',
            rating: 4.5,
            reviews: 98,
            roomType: 'Private room',
            bedrooms: 1,
            bathrooms: 1,
            amenities: ['WiFi', 'TV', 'Fridge']
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1499696018065-5e77c8a7d4f3?auto=format&fit=crop&w=1600&q=80',
            title: 'Trendy Williamsburg Apartment',
            location: 'Kismayo, Somalia',
            price: '$160',
            priceUnit: '/night',
            rating: 4.7,
            reviews: 203,
            roomType: 'Entire apartment',
            bedrooms: 2,
            bathrooms: 1,
            amenities: ['WiFi', 'Kitchen', 'Rooftop Access']
        },
    ], [])

    const runSearch = () => {
        let results = searchResults

        if (location && location.trim()) {
            results = results.filter(item =>
                item.location.toLowerCase().includes(location.toLowerCase())
            )
        }

        
        results = results.filter(item => {
            const price = parseInt(item.price.replace('$', ''))
            return price <= priceRange
        })

        
        results = results.filter(item => item.rating >= rating)

        setFilteredResults(results)
    }

    useEffect(() => {
        runSearch()
    }, [location, checkIn, checkOut, guests, priceRange, rating, searchResults])

    const handleSearch = (e) => {
        e.preventDefault()

        const nextParams = new URLSearchParams()
        if (location.trim()) nextParams.set('location', location.trim())
        if (checkIn) nextParams.set('checkIn', checkIn)
        if (checkOut) nextParams.set('checkOut', checkOut)
        if (guests) nextParams.set('guests', guests)

        setSearchParams(nextParams)
        runSearch()
    }

    const displayResults = filteredResults
    const locationLabel = location.trim() || 'All locations'

    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <form onSubmit={handleSearch} className="flex gap-4 mb-4">
                        <div className="flex items-center space-x-2 border-r pr-4 flex-1">
                            <MapPin size={18} />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500">WHERE</p>
                                <input
                                    type="text"
                                    placeholder="Kismayo"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="outline-none font-semibold text-sm w-full bg-transparent"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border-r pr-4 flex-1">
                            <Calendar size={18} />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500">CHECK IN</p>
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="outline-none font-semibold text-sm w-full bg-transparent"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border-r pr-4 flex-1">
                            <Calendar size={18} />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500">CHECK OUT</p>
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="outline-none font-semibold text-sm w-full bg-transparent"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 border-r pr-4 flex-1">
                            <Users size={18} />
                            <div className="flex-1">
                                <p className="text-xs text-gray-500">GUESTS</p>
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    className="outline-none font-semibold text-sm bg-transparent w-full"
                                >
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4+ Guests</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn-primary whitespace-nowrap">Search</button>
                    </form>

                    <div className="flex items-center justify-between">
                        <p className="text-gray-600 font-semibold">{displayResults.length} stays in {locationLabel}</p>
                        <button
                            type="button"
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400"
                        >
                            <Filter size={18} />
                            <span>Filters</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {showFilters && (
                        <div className="lg:col-span-1 bg-white rounded-2xl p-6 h-fit sticky top-32">
                            <h3 className="text-xl font-bold mb-6">Filters</h3>

                            
                            <div className="mb-8">
                                <h4 className="font-semibold mb-4">Price Range</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="w-full"
                                />
                                <p className="text-gray-600 mt-2">Up to ${priceRange}/night</p>
                            </div>

                            
                            <div className="mb-8">
                                <h4 className="font-semibold mb-4">Rating</h4>
                                <div className="space-y-2">
                                    {[5, 4, 3].map((rate) => (
                                        <label key={rate} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                onChange={() => setRating(rate)}
                                                defaultChecked={rating === rate}
                                            />
                                            <span className="flex items-center space-x-1">
                                                {[...Array(rate)].map((_, i) => (
                                                    <Star key={i} size={16} className="fill-gray-900" />
                                                ))}
                                                <span className="text-gray-600">& up</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            
                            <div className="mb-8">
                                <h4 className="font-semibold mb-4">Amenities</h4>
                                <div className="space-y-2">
                                    {['WiFi', 'Kitchen', 'Parking', 'Washer', 'AC', 'Heating'].map((amenity) => (
                                        <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="checkbox" />
                                            <span className="text-gray-700">{amenity}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            
                            <div>
                                <h4 className="font-semibold mb-4">Room Type</h4>
                                <div className="space-y-2">
                                    {['Entire apartment', 'Private room', 'Shared room'].map((type) => (
                                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="checkbox" />
                                            <span className="text-gray-700">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    
                        <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
                        <div className="space-y-6">
                            {displayResults.length === 0 ? (
                                <div className="bg-white rounded-2xl p-8 text-center">
                                    <p className="text-gray-600 text-lg">No stays found matching your criteria. Try adjusting your filters.</p>
                                </div>
                            ) : (
                                displayResults.map((result) => (
                                    <div key={result.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                                            
                                            <div className="md:col-span-1">
                                                <img
                                                    src={result.image}
                                                    alt={result.title}
                                                    className="w-full h-64 md:h-48 object-cover rounded-lg"
                                                />
                                            </div>

                                            
                                            <div className="md:col-span-2 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900">{result.title}</h3>
                                                            <p className="text-gray-600 text-sm">{result.roomType}</p>
                                                            <p className="text-gray-600 text-sm">{result.location}</p>
                                                        </div>
                                                        <button className="rounded-full p-2 hover:bg-gray-100">
                                                            <Heart size={20} />
                                                        </button>
                                                    </div>

                                                    
                                                    <div className="flex space-x-4 text-sm text-gray-600 my-3">
                                                        <span>{result.bedrooms} bed{result.bedrooms > 1 ? 's' : ''}</span>
                                                        <span>{result.bathrooms} bath{result.bathrooms > 1 ? 's' : ''}</span>
                                                    </div>

                                                    
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {result.amenities.map((amenity) => (
                                                            <span key={amenity} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                                                                {amenity}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    
                                                    <div className="flex items-center space-x-2">
                                                        <Star size={18} className="fill-gray-900" />
                                                        <span className="font-semibold">{result.rating}</span>
                                                        <span className="text-gray-600">({result.reviews} reviews)</span>
                                                    </div>
                                                </div>

                                                
                                                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                                                    <div>
                                                        <p className="text-2xl font-bold text-gray-900">{result.price}</p>
                                                        <p className="text-gray-600 text-sm">{result.priceUnit}</p>
                                                    </div>
                                                    <button className="btn-primary">Reserve</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
