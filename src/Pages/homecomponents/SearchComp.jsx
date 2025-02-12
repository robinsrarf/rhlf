import React from 'react'

export default function SearchComp() {
  return (
    <div className="flex items-center justify-center w-full p-10 flex-col ">

        
      <div className="flex items-center w-full max-w-xl border-2 border-[#FF7400]  rounded-xl shadow-md relative ">
        {/* Custom Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF8E00] to-[#FF1F00] rounded-lg "></div>
        
        {/* Input Group */}
        <input
          type="text"
          id="searchBar"
          className="w-full py-3 px-7 text-gray-700 placeholder-gray-400 focus:outline-none  rounded-lg relative z-10"
          placeholder="Search By Campaign Title Or NGO Name"
          autoComplete="off"
        />
        
        {/* Search Button */}
        <div className="bg-gradient-to-r from-[#FF8E00] to-[#FF1F00] text-white p-3 rounded-r-lg cursor-pointer">
          <button className="flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-7 h-8"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
