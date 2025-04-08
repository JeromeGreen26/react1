import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

// Get the root element where the React app will be rendered
const rootElement = document.getElementById('app') as HTMLElement;

// Create a React root and render the App component
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element
root.render(<App />);
