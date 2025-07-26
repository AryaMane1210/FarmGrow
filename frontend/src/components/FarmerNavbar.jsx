import React from "react";

function FarmerNavbar() {
  return (
    <nav className="bg-white py-4 px-[10px] w-full">
      <div className="grid grid-cols-8 gap-[20px] items-center">
        {/* Logo - 2 columns */}
        <div className="col-span-2 flex items-center gap-2">
          {/* Logo Icon */}
          <svg
            width="32"
            height="32"
            className="text-green-600"
            fill="none"
            viewBox="0 0 32 32"
          >
            <circle cx="16" cy="16" r="16" fill="#22c55e" />
            <path d="M12 18c2-6 8-7 8-7s-1 6-8 7z" fill="#FFF" />
          </svg>
          <span className="font-bold text-xl text-green-700">
            Farm<span className="text-black">Vista</span>
          </span>
        </div>

        {/* Search - next 2 columns */}
        <div className="col-span-2">
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 placeholder-gray-400 bg-gray-100"
            placeholder="Search something here....."
            type="text"
          />
        </div>

        {/* Spacer - 1 column */}
        <div className="col-span-1" />

        {/* Notification Bell - right edge of 6th column */}
        <div className="col-span-1 flex justify-end">
          <div className="relative flex justify-end">
            {/* Bell Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405
                C18.37 15.21 18 14.11 18 13V9a6 6 0 10-12 0v4c0 1.11-.37 2.21-1.595 2.595L3 17h5m7 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Green notification dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-500"></span>
          </div>
        </div>

        {/* Profile - last 2 columns, content right-aligned and center-justified */}
        <div className="col-span-2 h-full flex items-center">
          <div
            className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition hover:bg-gray-100"
            style={{ width: "100%" }}
          >
            {/* Profile image */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            {/* Info - left aligned */}
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-gray-700 text-sm leading-tight text-left">
                Albert Flores
              </p>
              <p className="text-xs text-gray-400 leading-tight text-left">
                albert45@gmail.com
              </p>
            </div>
            {/* Dropdown Arrow */}
            <svg
              width="20"
              height="20"
              fill="none"
              className="text-gray-400"
              viewBox="0 0 20 20"
            >
              <path
                d="M7 8l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default FarmerNavbar;
