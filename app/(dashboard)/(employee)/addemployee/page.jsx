"use client"
import axios from 'axios';
import React, { useState } from 'react'

function customalert(color, msg) {
    return (<div className={`flex items-center p-4 mb-4 text-sm text-${color}-800 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:text-${color}-300`} role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className='font-medium'>
            {msg}
        </div>
    </div>)
}

export default function Page() {
    const [formstate, setFormstate] = useState({
        address: "",
        arrival: "",
        departure: "",
        email: "",
        name: "",
        password: ""
    });
    const [submitting, setSubmitting] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting("pending");
        // console.log(formstate);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/user/signup`, formstate);
            // console.log(res)
            setSubmitting("success");
            setFormstate({
                address: "",
                arrival: "",
                departure: "",
                email: "",
                name: "",
                password: ""
            })
        } catch (error) {
            setSubmitting("error");
            // console.log(error)
        }
        setInterval(() => {
            setSubmitting("");
        }, 5000);
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Name</label>
                            <input type="text" name="name" id="name" value={formstate.name} onChange={(e) => setFormstate({ ...formstate, name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Employee's name" required="A employee name is required" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={formstate.email} onChange={(e) => setFormstate({ ...formstate, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Email" required="Email is required" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={formstate.password} onChange={(e) => setFormstate({ ...formstate, password: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Password for employee id" required="Password is required" />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your zone:</label>
                            <select id="address" defaultValue="" onChange={(e) => setFormstate({ ...formstate, address: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" className="text-grey">None</option>
                                <option value="north">North</option>
                                <option value="south">South</option>
                                <option value="east">East</option>
                                <option value="west">West</option>
                                <option value="central">Central</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label htmlFor="arrival" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Arrival time</label>
                            <input type="time" name="arrival" id="arrival" value={formstate.arrival} onChange={(e) => setFormstate({ ...formstate, arrival: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Arrival time" required="Arrival time is required" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="departure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Departure time</label>
                            <input type="time" name="departure" id="departure" value={formstate.departure} onChange={(e) => setFormstate({ ...formstate, departure: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Departure time" required="Departure time is required" />
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add Employee
                    </button>
                </form>
            </div>
            {
                submitting == "pending" && customalert("yellow", "submitting ...")
            }
            {
                submitting == "success" && customalert("green", "Employee added!")
            }
            {
                submitting == "error" && customalert("red", "something went wrong!")
            }
        </section>
    )
}
