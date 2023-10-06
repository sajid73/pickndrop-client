"use client"
import { registerUser } from '@/app/(apis)/api';
import CustomAlert from '@/app/components/CustomAlert';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Page() {
    const [formstate, setFormstate] = useState({
        zone: "",
        arrival: "",
        departure: "",
        email: "",
        name: "",
        password: ""
    });
    const [submitting, setSubmitting] = useState();
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting("pending");
        // console.log(formstate);
        try {
            const res = await registerUser(formstate);
            // console.log(res)
            setSubmitting("success");
            setFormstate({
                arrival: "",
                departure: "",
                email: "",
                name: "",
                password: "",
                zone: ""
            })
            router.push('/employeelist')
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
                            <label for="zone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your zone:</label>
                            <select id="zone" defaultValue="" onChange={(e) => setFormstate({ ...formstate, zone: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                submitting == "pending" && <CustomAlert color="yellow" msg="submitting ..." />
            }
            {
                submitting == "success" && <CustomAlert color="green" msg="Employee added!" />
            }
            {
                submitting == "error" && <CustomAlert color="red" msg="something went wrong!" />
            }
        </section>
    )
}
