import React, { useState } from 'react';
import { Button } from './Button';
import logo from '../assets/logo.svg'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="container mx-auto px-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl"><img src={logo} alt="logo" /></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="text-slate-200 hover:text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Home</a>
            <a href="#" className="text-slate-200 hover:text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Tasks</a>
            <a href="#" className="text-slate-200 hover:text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Reminders</a>
            <a href="#" className="text-slate-200 hover:text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors">Budget</a>
            <Button className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded">
              Sign In
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-slate-200 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-slate-800 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-slate-200 hover:text-white px-3 py-2 rounded hover:bg-slate-700 transition-colors">Home</a>
          <a href="#" className="block text-slate-200 hover:text-white px-3 py-2 rounded hover:bg-slate-700 transition-colors">Tasks</a>
          <a href="#" className="block text-slate-200 hover:text-white px-3 py-2 rounded hover:bg-slate-700 transition-colors">Reminders</a>
          <a href="#" className="block text-slate-200 hover:text-white px-3 py-2 rounded hover:bg-slate-700 transition-colors">Budget</a>
          <div className="mt-4 px-3 py-2">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};