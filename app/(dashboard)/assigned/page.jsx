"use client"

import { calculatePath } from '@/app/(apis)/api'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [result, setResult] = useState()
  const fetchResult = async () => {
    const res = await calculatePath()
    if (res) {
      setResult(res)
      // console.log(res)
      for (const key in res) {
        console.log(key)
      }
    }
  }

  const explore = (obj) => {
    for (const key in obj) {
      return <h1>{key}</h1>
    }
  }

  useEffect(() => {
    fetchResult()
  }, [])

  return (
    <div className='lg:w-1/2 mx-auto'>
      <h1 className="font-bold text-3xl text-center">Assigned vehicles</h1>
      <div className='w-5/6 mx-auto'>
        {
          result ? (<div>
            {Object.keys(result).map((key, index) => {
              return (
                <div key={index}>
                  <h1 className='font-bold'>Time: {key}</h1>
                  {
                    Object.keys(result[key]).map((k, i) => (
                      <div key={k} className="ml-5 bg-slate-300 m-2 p-2 w-fit rounded-md">
                        <div>
                          <b>Employee Name:</b> {k}
                        </div>
                        <div>
                          <b>Assigned Vehicle:</b> {result[key][k]}
                        </div>
                      </div>
                    ))
                  }
                </div>
              )
            })}
          </div>) : (
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg py-3 mx-auto">
              <div className="flex items-center w-full space-x-2">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[480px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[400px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[480px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[440px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[360px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          )
        }
      </div>
    </div>
  )
}
