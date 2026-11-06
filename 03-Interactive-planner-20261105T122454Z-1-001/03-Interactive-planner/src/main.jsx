import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/dm-sans/wght.css';
import '@fontsource-variable/bricolage-grotesque/wght.css';
import { App } from './App.jsx';
import './design.css';
import './planner.css';

createRoot(document.getElementById('root')).render(<App/>);

