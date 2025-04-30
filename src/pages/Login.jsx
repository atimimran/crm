import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md px-4 pt-12">
        <div className=" shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800" >LOGO</h1>
          <h2 className="heading-title text-center">PLAY</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm  font-medium  text-gray-400 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 placeholder-gray-400

 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="plan-btn ml-0 w-full"
            >
              Sign in With Email
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login