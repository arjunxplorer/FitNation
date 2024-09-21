"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function HammerWorkoutApp() {
  const [step, setStep] = useState(0)

  const handleFirstPageClick = () => {
    if (step === 0) {
      setStep(1)
    }
  }

  const handleEmailLogin = () => {
    if (step === 1) {
      setStep(2)
    }
  }

  const handleEmailSignUp = () => {
    if (step === 1) {
      setStep(3)
    }
  }

  const handleBackToSecondPage = () => {
    if (step === 2 || step === 3) {
      setStep(1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted')
  }

  return (
    <div className="w-full h-[100dvh] bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      <div 
        className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10"
        onClick={handleFirstPageClick}
      >
        
          {step === 0 && (
            <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-10"
            onClick={(e) => {
              e.stopPropagation()
              handleBackToSecondPage()
            }}
            aria-label="Go back"
          >
            <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.button>
        )}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center h-full text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Welcome to</h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">FitNation</h2>
              <p className="text-xl sm:text-2xl md:text-3xl">Plan your workout time with us</p>
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center h-full w-full max-w-md mx-auto space-y-6"
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to</h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">FitNation</h2>
                <p className="text-lg sm:text-xl md:text-2xl">Plan your workout time with us</p>
              </div>
              <button 
                className="w-full bg-white text-black py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('Gmail login clicked')
                }}
                aria-label="Login with Gmail"
              >
                Login With Gmail
              </button>
              <button 
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold"
                onClick={(e) => {
                  e.stopPropagation()
                  handleEmailLogin()
                }}
                aria-label="Login with Email"
              >
                Login With Email
              </button>
              <p className="text-base sm:text-lg md:text-xl">
                Not a member? <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleEmailSignUp(); }} className="text-blue-400" aria-label="Sign Up">Sign Up</button>
              </p>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center h-full w-full max-w-md mx-auto space-y-6"
            >
              <button
                className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8"
                onClick={(e) => {
                  e.stopPropagation()
                  handleBackToSecondPage()
                }}
                aria-label="Go back"
              >
                <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome Back</h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">HAMMER WORKOUT</h2>
                <p className="text-lg sm:text-xl md:text-2xl">Login to your account</p>
              </div>
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white bg-opacity-20 placeholder-gray-300 py-3 sm:py-4 px-4 rounded-full text-lg sm:text-xl md:text-2xl"
                  aria-label="Email"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white bg-opacity-20 placeholder-gray-300 py-3 sm:py-4 px-4 rounded-full text-lg sm:text-xl md:text-2xl"
                  aria-label="Password"
                  required
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold">
                  Login
                </button>
              </form>
              <button 
                className="w-full bg-white text-black py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('Gmail login clicked')
                }}
                aria-label="Login with Gmail"
              >
                Login With Gmail
              </button>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center h-full w-full max-w-md mx-auto space-y-6"
            >
              <button
                className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8"
                onClick={(e) => {
                  e.stopPropagation()
                  handleBackToSecondPage()
                }}
                aria-label="Go back"
              >
                <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Join Us</h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">HAMMER WORKOUT</h2>
                <p className="text-lg sm:text-xl md:text-2xl">Create your account</p>
              </div>
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white bg-opacity-20 placeholder-gray-300 py-3 sm:py-4 px-4 rounded-full text-lg sm:text-xl md:text-2xl"
                  aria-label="Email"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white bg-opacity-20 placeholder-gray-300 py-3 sm:py-4 px-4 rounded-full text-lg sm:text-xl md:text-2xl"
                  aria-label="Password"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-white bg-opacity-20 placeholder-gray-300 py-3 sm:py-4 px-4 rounded-full text-lg sm:text-xl md:text-2xl"
                  aria-label="Confirm Password"
                  required
                />
                <div className="flex items-center text-base sm:text-lg md:text-xl">
                  <input type="checkbox" id="terms" className="mr-2" required />
                  <label htmlFor="terms">I agree to Terms of Service and Privacy Policy</label>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold">
                  Sign Up
                </button>
              </form>
              <button 
                className="w-full bg-white text-black py-3 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log('Google sign-up clicked')
                }}
                aria-label="Sign Up with Google"
              >
                Sign Up with Google
              </button>
              <p className="text-base sm:text-lg md:text-xl">
                Already a member? <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setStep(1); }} className="text-blue-400" aria-label="Login">Login</button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}