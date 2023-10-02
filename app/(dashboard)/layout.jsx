"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const active = "text-blue-600 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
    const disable = "border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
    return (
        <section>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <Link href="/profile" className={`inline-block p-4 border-b-2 ${pathname == '/profile' ? active : disable}`}>Profile</Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/addvehicle" className={`inline-block p-4 border-b-2 ${pathname == '/addvehicle' ? active : disable}`} aria-current="page">Add vehicle</Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/addemployee" className={`inline-block p-4 border-b-2 ${pathname == '/addemployee' ? active : disable}`}>Add employee</Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/vehiclelist" className={`inline-block p-4 border-b-2 ${pathname == '/vehiclelist' ? active : disable}`}>Vehicle list</Link>
                    </li>
                    <li>
                        <Link href="/employeelist" className={`inline-block p-4 border-b-2 ${pathname == '/employeelist' ? active : disable}`}>Employee list</Link>
                    </li>
                    <li>
                        <Link href="/nextdest" className={`inline-block p-4 border-b-2 ${pathname == '/nextdest' ? active : disable}`}>Next destination</Link>
                    </li>
                    <li>
                        <Link href="/assigned" className={`inline-block p-4 border-b-2 ${pathname == '/assigned' ? active : disable}`}>Assigned vehicle</Link>
                    </li>
                </ul>
            </div>
            <div className="text-right"><button className="bg-primary-800 text-white p-1 rounded-md m-2" onClick={() => router.refresh()}>Refresh</button></div>

            {children}
        </section>
    )
}