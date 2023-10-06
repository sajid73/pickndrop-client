"use client"
import { addVehicle } from '@/app/(apis)/api';
import CustomAlert from '@/app/components/CustomAlert';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Page() {
    const [formstate, setFormstate] = useState({
        name: "",
        regnumber: "",
        capacity: 0,
        driverName: "",
        driverContact: "",
    });
    const [submitting, setSubmitting] = useState();
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting("pending");
        try {
            const res = await addVehicle(formstate);
            setSubmitting("success");
            setFormstate({
                name: "",
                regnumber: "",
                capacity: 0,
                driverName: "",
                driverContact: "",
            })
            router.push('/vehiclelist');
        } catch (error) {
            setSubmitting("error");
        }
        setInterval(() => {
            setSubmitting("");
        }, 5000);
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new vehicle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle Name</label>
                            <input type="text" name="name" value={formstate.name} id="name" onChange={(e) => setFormstate({ ...formstate, name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Vehicle's name" required="A vehicle name is required" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="regnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Register number</label>
                            <input type="text" name="regnumber" value={formstate.regnumber} id="regnumber" onChange={(e) => setFormstate({ ...formstate, regnumber: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Registration number" required="A vehicle register number is required" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="capacity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capacity</label>
                            <input type="number" name="capacity" value={formstate.capacity} id="capacity" onChange={(e) => setFormstate({ ...formstate, capacity: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Vehicle's capacity" required="Enter vehicle's capacity" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="driverName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Driver Name</label>
                            <input type="text" name="driverName" value={formstate.driverName} id="driverName" onChange={(e) => setFormstate({ ...formstate, driverName: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Driver's name" required="Driver name is required" />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="driverContact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Driver contact</label>
                            <input type="text" name="driverContact" value={formstate.driverContact} id="driverContact" onChange={(e) => setFormstate({ ...formstate, driverContact: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Driver's contact" required="Driver's contact is required" />
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add vehicle
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
