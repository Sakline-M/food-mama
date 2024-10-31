import React from 'react';

const RegisterComponents = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register Page</h2>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="text"
              placeholder="Enter email id"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <input
              type="text"
              placeholder="Restaurant name"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* City Input */}
          <div>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Full Address */}
          <div>
            <input
              type="text"
              placeholder="Enter full address"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Contact Number */}
          <div>
            <input
              type="number"
              placeholder="Enter contact No."
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Signup Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponents;
