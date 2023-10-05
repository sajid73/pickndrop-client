import { employeeList } from '@/app/(apis)/api';
import React from 'react'

export const revalidate = 1;
const fetchPosts = async () => {
  const data = await employeeList();
  return data.employee;
};


export default async function Page() {
  const vehicles = await fetchPosts();
  return (
    <>
      <h1 className='text-center m-5 font-bold text-3xl'>Employee list</h1>

      <div className="lg:w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg ml-auto mr-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Zone
              </th>
              <th scope="col" className="px-6 py-3">
                Arrival
              </th>
              <th scope="col" className="px-6 py-3">
                Deperture
              </th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles && vehicles.map((employee) => (<tr key={employee.id} className="odd:bg-white even:bg-gray-50 border-b odd:dark:bg-gray-900 even:evn:dark:bg-gray-800 odd:dark:border-gray-700 even:dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {employee.name}
                </td>
                <td className="px-6 py-4">
                  {employee.email}
                </td>
                <td className="px-6 py-4">
                  {employee.zone}
                </td>
                <td className="px-6 py-4">
                  {employee.arrival}
                </td>
                <td className="px-6 py-4">
                  {employee.departure}
                </td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
