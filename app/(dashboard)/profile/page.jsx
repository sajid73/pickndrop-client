"use client"
import { deleteCookie } from 'cookies-next';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { UserContext } from "../../layout_provider"

export default function Page() {
    const router = useRouter();
    const [sharedData, setSharedData] = useContext(UserContext);
    let data;
    if (typeof window != undefined) {
        data = JSON.parse(localStorage.getItem('user'));
    }
    if (!sharedData.user.name) {
        router.push("/signin");
    }

    const handleSignout = (e) => {
        deleteCookie("token");
        router.push("/");
    }

    return (
        <>
            {
                data && <div className="sm:w-full md:w-2/3 lg:w-1/3 bg-slate-200 m-auto p-2 rounded-xl">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        Name
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {data.name}
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        Email
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {data.email}
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        Role
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {data.role}
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        Address
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {data.address}
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        Arrival time
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {data.arrival}
                                    </td>
                                </tr>
                                <tr className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4">
                                        Departure time
                                    </th>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {data.departure}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            <Button className="text-white mx-auto my-2 bg-red-600" onClick={handleSignout}>Logout</Button>
        </>
    )
}