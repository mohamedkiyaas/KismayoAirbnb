import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, Apple, Chrome } from 'lucide-react'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ email, password, rememberMe })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-12">
                
                <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-red-500 mb-4">KismayoBNB</div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-600 mt-2">Sign in to continue exploring</p>
                </div>

                
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="input-field pl-10"
                                required
                            />
                        </div>
                    </div>

                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                    </div>

                    
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-5 h-5 border border-gray-300 rounded cursor-pointer"
                            />
                            <span className="text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-red-500 hover:text-red-600 font-semibold">
                            Forgot password?
                        </a>
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition text-lg"
                    >
                        Sign In
                    </button>
                </form>

                
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
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
                    Don't have an account?{' '}
                    <Link to="/create-account" className="text-red-500 hover:text-red-600 font-bold">
                        Create one
                    </Link>
                </p>

                
                <p className="text-center text-xs text-gray-500 mt-6">
                    By signing in, you agree to our{' '}
                    <a href="#" className="underline hover:text-gray-700">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="underline hover:text-gray-700">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    )
}
