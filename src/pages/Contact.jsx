import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl text-red-100">We're here to help and answer any question you might have</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    <div className="lg:col-span-1 space-y-8">
                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <Phone size={24} className="text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-600">+1 (555) 000-0000</p>
                                <p className="text-gray-500 text-sm">Available Mon-Fri 9am-6pm EST</p>
                            </div>
                        </div>

                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <Mail size={24} className="text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600">support@kismayobnb.com</p>
                                <p className="text-gray-600">booking@kismayobnb.com</p>
                                <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                            </div>
                        </div>

                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <MapPin size={24} className="text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                                <p className="text-gray-600">Kismayo Main Street</p>
                                <p className="text-gray-600">Kismayo</p>
                                <p className="text-gray-600">Somalia</p>
                            </div>
                        </div>

                        
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <Clock size={24} className="text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                                <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                                <p className="text-gray-600">Saturday: 10am - 4pm</p>
                                <p className="text-gray-600">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                            {submitted && (
                                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                                    <AlertCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-green-900">Message Sent!</h3>
                                        <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="input-field"
                                        required
                                    />
                                </div>

                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="input-field"
                                        required
                                    />
                                </div>

                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="input-field"
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="booking">Booking Issue</option>
                                        <option value="account">Account Help</option>
                                        <option value="payment">Payment Question</option>
                                        <option value="cancellation">Cancellation</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        rows="6"
                                        className="input-field resize-none"
                                        required
                                    ></textarea>
                                </div>

                                
                                <button
                                    type="submit"
                                    className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition flex items-center justify-center space-x-2 text-lg"
                                >
                                    <Send size={20} />
                                    <span>Send Message</span>
                                </button>
                            </form>

                            
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-4">Response Time</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Your information is securely stored and used only to respond to your inquiry. We respect your privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'How do I book a stay?',
                                a: 'Browse our available properties, select your dates, and complete the booking form. You\'ll receive a confirmation email with all the details.'
                            },
                            {
                                q: 'What is your cancellation policy?',
                                a: 'Most stays offer flexible cancellation up to 48 hours before arrival. Some properties may have different policies listed in their details.'
                            },
                            {
                                q: 'How do I contact my host?',
                                a: 'Once your booking is confirmed, you can message your host directly through the KismayoBNB app or website.'
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay for your convenience.'
                            }
                        ].map((faq, index) => (
                            <details key={index} className="group border border-gray-200 rounded-lg">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                                    <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                                    <span className="text-red-500 group-open:rotate-180 transition">▼</span>
                                </summary>
                                <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
