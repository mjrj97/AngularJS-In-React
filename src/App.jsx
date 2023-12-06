import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';

import AngularApp from './AngularApp';
import ReactApp from './ReactApp';

// Prepare the AngularJS app for mounting
import '@/angular/app.module';

// Setup the React DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <Link to='/react'>React</Link> <Link to='/angular'>Angular</Link>
      </header>
      <article>
          <Routes>
            <Route path='/react' element={<ReactApp />} />
            <Route path='/angular' element={<AngularApp />} />
            <Route path='*' element={<Navigate to='/angular' />} />
          </Routes>
      </article>
    </BrowserRouter>
  </StrictMode>
);
