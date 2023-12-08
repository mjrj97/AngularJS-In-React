import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';

import AngularMount from '/AngularMount';
import ReactApp from '/ReactApp';

// Prepare the AngularJS app for mounting
import '/angular/app.module';

const Router = process.env.NODE_ENV === 'test' ? MemoryRouter : BrowserRouter;

// Setup the React DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <header>
        <Link to='/react'>React</Link> <Link to='/angular'>Angular</Link>
      </header>
      <article>
        <Routes>
          <Route path='/react' element={<ReactApp />} />
          <Route path='/angular' element={<AngularMount />} />
          <Route path='*' element={<Navigate to='/react' />} />
        </Routes>
      </article>
    </Router>
  </StrictMode>
);
