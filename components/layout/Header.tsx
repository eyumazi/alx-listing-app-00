import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          {/* Left side - Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">alx</h1>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Overseas trip?
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Get the latest info 
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              on travel guides
            </a>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
              Move info
            </button>
          </nav>
        </div>

        {/* Bottom row - Search/Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Location selector */}
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="‘Deaton"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Date selectors */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Check in
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Check out
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* People selector */}
          <div className="flex-1 md:flex-none w-full md:w-auto">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              People
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>1 person</option>
              <option>2 people</option>
              <option>3 people</option>
              <option>4+ people</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
