import React, { useState } from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        alert("Thank you for contacting us! We'll get back to you shortly.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Have questions? We're here to help. Send us a message and we'll contain you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-indigo-50 rounded-2xl p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                            <IoLocationOutline className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Visit us</h4>
                                        <p className="mt-1 text-gray-500">
                                            123 Commerce St.<br />
                                            Marketplace City, MC 12345
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                            <IoCallOutline className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Call us</h4>
                                        <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                            <IoMailOutline className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Email us</h4>
                                        <p className="mt-1 text-gray-500">support@yourshop.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="text-lg font-medium text-gray-900 mb-4">Follow us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <IoLogoFacebook className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <IoLogoInstagram className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <IoLogoTwitter className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <IoLogoLinkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-0 lg:p-4">
                        <form onSubmit={handleSubmit} className="space-y-6">
                             <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border"
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border"
                                        placeholder="How can we help?"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border"
                                        placeholder="Write your message here..."
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact