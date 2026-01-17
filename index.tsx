
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    // If element is not found immediately, wait a frame and try again
    // This helps in certain environments where the DOM might not be fully ready
    requestAnimationFrame(() => {
      const retryElement = document.getElementById('root');
      if (retryElement) {
        const root = ReactDOM.createRoot(retryElement);
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      } else {
        console.error("Critical Error: Could not find root element with id 'root' to mount to.");
      }
    });
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
