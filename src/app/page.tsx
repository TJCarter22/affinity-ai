'use client';

import React, { useState, useCallback } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Welcome to Affinity AI! 🎉');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Affinity AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered UX research affinitization and insight extraction tool
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-800">{message}</p>
          <button
            onClick={() => setMessage('🚀 Ready to analyze some notes!')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
}
