import React, { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import { prepareAngular } from '@/app.module';

const ReactApp = lazy(() => import('./ReactApp'));
const AngularApp = lazy(() => import('./AngularApp'));

prepareAngular();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <Link to='/react'>React</Link> <Link to='/angular'>Angular</Link>
      </header>
      <article>
        <Suspense fallback='Loading...'>
          <Routes>
            <Route path='/react' element={<ReactApp />} />
            <Route path='/angular' element={<AngularApp />} />
            <Route path='*' element={<Navigate to='/angular' />} />
          </Routes>
        </Suspense>
      </article>
    </BrowserRouter>
  </StrictMode>
);
