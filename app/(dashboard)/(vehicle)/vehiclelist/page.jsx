import { vehicleList } from '@/app/(apis)/api';
import React from 'react'

const fetchPosts = async () => {
  const data = await vehicleList();
  return data.vehicles;
};


export default async function Page() {
  // const [vehicles, setvehicles] = useState([]);
  const vehicles = await fetchPosts();
  return (
    <>
      <h1 className='text-center m-5 font-bold text-3xl'>Vehicle list</h1>

      <div className="lg:w-1/2 relative overflow-x-auto shadow-md sm:rounded-lg ml-auto mr-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Vehicle name / model
              </th>
              <th scope="col" className="px-6 py-3">
                Registration number
              </th>
              <th scope="col" className="px-6 py-3">
                Capacity
              </th>
              <th scope="col" className="px-6 py-3">
                Driver
              </th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles && vehicles.map((vehicle) => (<tr key={vehicle.id} className="odd:bg-white even:bg-gray-50 border-b odd:dark:bg-gray-900 even:evn:dark:bg-gray-800 odd:dark:border-gray-700 even:dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {vehicle?.name}
                </td>
                <td className="px-6 py-4">
                  {vehicle.regnumber}
                </td>
                <td className="px-6 py-4">
                  {vehicle.capacity}
                </td>
                <td className="px-6 py-4">
                  {vehicle.driverName}
                </td>
              </tr>))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
