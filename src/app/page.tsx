'use client';

import React, { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Welcome to Affinity AI! 🎉');

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center' as const
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      marginBottom: '32px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '32px'
    },
    message: {
      fontSize: '1.125rem',
      color: '#374151',
      marginBottom: '16px'
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Affinity AI
        </h1>
        <p style={styles.subtitle}>
          AI-powered UX research affinitization and insight extraction tool
        </p>
        <div style={styles.card}>
          <p style={styles.message}>{message}</p>
          <button
            style={styles.button}
            onClick={() => setMessage('🚀 Ready to analyze some notes!')}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
}
