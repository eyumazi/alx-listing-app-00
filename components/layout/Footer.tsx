import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Explore section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Explore</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#" className="block hover:text-blue-600">
                  Experiments in Dubai
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Hotels in New York
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Villa in Spain
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Mansion in Indonesia
                </a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block hover:text-blue-600">
                  About us
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Blog
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Career
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Customers
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Brand
                </a>
              </div>
            </div>
          </div>

          {/* Help section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Help</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-600">
                Support
              </a>
              <a href="#" className="block hover:text-blue-600">
                Cancel booking
              </a>
              <a href="#" className="block hover:text-blue-600">
                Refunds Process
              </a>
            </div>
          </div>

          {/* Notice section */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <p className="text-sm">
              Some hotel requires you to cancel more than 24 hours before
              check-in.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Details here
              </a>
            </p>
          </div>
        </div>

        {/* Copyright/legal would typically go here */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
