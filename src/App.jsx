import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './customs/Header'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Header />

        <main className="text-center mt-20 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Track Every Rupee. Grow Every Day.
          </h2>
          <h2 className="text-lg sm:text-xl font-normal text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Your smart companion for managing expenses, staying on budget, and achieving financial freedom.
          </h2>
          <a href='/login'>
            <Button className="px-6 py-2 text-lg font-semibold border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:cursor-pointer hover:scale-105">
              Log In / Sign Up
            </Button>
          </a>
          <img
            src='/landing_img_light.png'
            alt='Expense Tracker Light Mode'
            className="mt-12 mx-auto w-full max-w-4xl rounded-xl shadow-lg transition-all duration-300 hidden dark:block"
          />
          <img
            src='/landing_img.png'
            alt='Expense Tracker Dark Mode'
            className="mt-12 mx-auto w-full max-w-4xl rounded-xl shadow-lg transition-all duration-300  dark:hidden"
          />
        </main>
      </div>

  )
}

export default App
