// src/App.js
import React, { useState } from 'react';
import './App.css';
import Registration from './Registration';
import Login from './Login';
import ForgotPassword from './ForgotPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('registration');

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'forgotPassword':
        return <ForgotPassword />;
      default:
        return <Registration />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {renderPage()}
        {currentPage !== 'dashboard' && (
          <div>
            <p>
              {currentPage === 'registration'
                ? "Already have an account? "
                : "Don't have an account? "}
              <button onClick={() => setCurrentPage(currentPage === 'registration' ? 'login' : 'registration')}>
                {currentPage === 'registration' ? 'Login' : 'Register'}
              </button>
            </p>
            {currentPage === 'login' && (
              <p>
                <button onClick={() => setCurrentPage('forgotPassword')}>Forgot Password?</button>
              </p>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
