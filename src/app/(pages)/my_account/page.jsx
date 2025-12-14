'use client'
import Footer from '@/app/(component)/Footer';
import SliderCommen from '@/app/(component)/SliderCommen'
import React from 'react'

function page() {
    const text = ('My account');
    return (
        <div>
            <SliderCommen text={text} />
            {/* LogIn Form */}
            <>
                <div className="max-w-[80%] mx-auto my-[3%]  ">
                    <h2 className="text-6xl font-[300] m-4">Login</h2>
                    <div className="max-w-full m-3 p-4 md:p-6 lg:p-8 border-2  bg-white rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 border-none" htmlFor="username">
                                    Username or Email
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username or Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex items-center ">
                                
                                <button
                                    className="bg-black hover:bg-orange-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <div className="flex items-center ml-4">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-500"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 text-sm text-gray-700"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="text-sm text-gray-700">
                                <a
                                    className="inline-block align-baseline font-bold text-sm py-4 text-orange-500 hover:text-orange-800"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

            </>
            <Footer />
        </div>
    )
}

export default page