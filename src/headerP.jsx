import React from 'react';
import { Link } from 'react-router-dom';
export default function HeaderP() {
  return (
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg shadow-orange-500">
      <div>
        <h1 className="text-xl font-bold uppercase tracking-wider cursor-pointer hover:text-orange-500 transition-colors duration-400">
          kumar ayush
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-6 font-medium mr-4">
          <li className="cursor-pointer hover:text-orange-500 hover:scale-120 transition-all duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:scale-120 transition-all duration-200">
            <Link to="/about">About me</Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
}
