import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'

function Footer() {
    return (
        <>
            <section className="relative overflow-hidden py-10 bg-gray-200">
                <div className="relative z-10 mx-auto max-w-7xl px-4">
                    <div className="-m-6 flex flex-wrap justify-center">
                        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col justify-between">
                                <div className=" inline-flex items-center justify-center">
                                    <Logo width="100px" /><br />
                                </div>
                                <p className="text-xl font-semibold text-gray-900 m-2">
                                    MyBlog
                                </p>
                                <div className="text-center">
                                    <p className="text-xs text-gray-600">
                                        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by DevUI.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" p-6  lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-3 text-xs font-semibold uppercase text-gray-500 text-start">
                                    Company
                                </h3>
                                <ul className="text-start">
                                    <li className="mb-3">
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Affiliate Program
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Press Kit
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" p-6  lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-3 text-xs font-semibold uppercase text-gray-500 text-start">
                                    Support
                                </h3>
                                <ul className="text-start">
                                    <li className="mb-3">
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Account
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Help
                                        </Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="text-sm font-medium text-gray-900 hover:text-gray-700"
                                            to="/"
                                        >
                                            Customer Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer