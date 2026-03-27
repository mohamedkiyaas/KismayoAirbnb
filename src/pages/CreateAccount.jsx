import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, Phone, Eye, EyeOff, Apple, Chrome, Calendar } from 'lucide-react'

export default function CreateAccount() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        agreeTerms: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        console.log(formData)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                
                <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-red-500 mb-4">KismayoBNB</div>
                    <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
                    <p className="text-gray-600 mt-2">Join millions of travelers worldwide</p>
                </div>

                
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                First Name
                            </label>
                            <div className="relative">
                                <User size={20} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="input-field pl-10"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Last Name
                            </label>
                            <div className="relative">
                                <User size={20} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="input-field pl-10"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="input-field pl-10"
                                required
                            />
                        </div>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                className="input-field pl-10"
                            />
                        </div>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Date of Birth
                        </label>
                        <div className="relative">
                            <Calendar size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                className="input-field pl-10"
                                required
                            />
                        </div>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="input-field pl-10 pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">At least 8 characters</p>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="input-field pl-10 pr-10"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="w-5 h-5 border border-gray-300 rounded mt-1"
                            required
                        />
                        <span className="text-sm text-gray-700">
                            I agree to the{' '}
                            <a href="#" className="text-red-500 hover:underline">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-red-500 hover:underline">
                                Privacy Policy
                            </a>
                        </span>
                    </label>

                    
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition text-lg mt-6"
                    >
                        Create Account
                    </button>
                </form>

                
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                    </div>
                </div>

                
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition font-semibold text-gray-700">
                        <Chrome size={20} />
                        <span>Google</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition font-semibold text-gray-700">
                        <Apple size={20} />
                        <span>Apple</span>
                    </button>
                </div>

                
                <p className="text-center mt-8 text-gray-700">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-red-500 hover:text-red-600 font-bold">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
