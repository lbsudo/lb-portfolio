import React from 'react'

type Props = {}

export default function Sidebar({ }: Props) {
  return (
    <>
      <div className="p-4 rounded-lg shadow-md">
        <p>Recent Post</p>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
        </ul>
        <div className="border-red-500 my-4"></div>
        <p className="text-lg font-semibold mb-2">Recent Post</p>
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
          <li className="p-2 hover:bg-gray-200 rounded transition-colors duration-200">
            Coming Soon........
          </li>
        </ul>
        <div className="border-red-500 my-4"></div>
      </div>
    </>
  )
}
