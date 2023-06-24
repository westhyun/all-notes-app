/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { HomePage } from './pages/HomePage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <meta name="description" content="A React Boilerplate application" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
