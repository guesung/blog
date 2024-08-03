import React from 'react';
import ReactDOM from 'react-dom/client';
import { twMerge } from 'tailwind-merge';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={twMerge('bg-black')}>dd</div>
  </React.StrictMode>
);
