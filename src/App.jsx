import React from 'react';
import { createRoot } from 'react-dom/client';

import AngularApp from './AngularApp';
import ReactApp from './ReactApp';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactApp />
    <AngularApp />
  </React.StrictMode>
);
