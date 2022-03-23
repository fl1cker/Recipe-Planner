import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeWeek from './routes/RecipeWeek/RecipeWeek';
import HeaderBar from './HeaderBar';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path="recipe-week" element={<RecipeWeek />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
