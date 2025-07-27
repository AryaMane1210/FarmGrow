import React, { useState, useRef, useEffect } from "react";
import { Bell, Search, User, Settings, LogOut } from "lucide-react";

export default function FarmerNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef();

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      window.addEventListener("mousedown", handleClick);
    }
    return () => window.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  return (
    <nav className="bg-white h-16 flex items-center px-8 justify-between shadow">
      {/* Searchbar - leftmost */}
      <div className="flex-1 flex items-center">
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            className="bg-[#F7FFF9] text-[#0FA344] placeholder-[#A0BCA7] rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA344] w-72 shadow-sm"
            placeholder="Search…"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#0FA344]" />
          </div>
        </div>
      </div>
      {/* Notification Bell & Profile */}
      <div className="flex items-center space-x-8">
        <button
          type="button"
          className="relative flex items-center justify-center rounded-full p-2 text-[#0FA344] hover:bg-[#BBFFD0] transition"
        >
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" />
        </button>
        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            className="flex items-center rounded-full bg-[#F4FFF2] border border-[#BBFFD0] p-1 focus:outline-none focus:ring-2 focus:ring-[#0FA344]"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <img
              className="h-9 w-9 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&q=80"
              alt="User"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#BBFFD0]">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-[#0FA344] hover:bg-[#BBFFD0]"
              >
                <User className="mr-2 h-4 w-4" />
                Account
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-[#0FA344] hover:bg-[#BBFFD0]"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-[#0FA344] hover:bg-[#BBFFD0]"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
