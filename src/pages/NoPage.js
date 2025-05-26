import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
          <p className="text-gray-100 mb-4">The page you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;