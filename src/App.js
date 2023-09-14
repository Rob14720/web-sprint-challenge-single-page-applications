import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom'; // Import Outlet

import Form from './pizza';

const App = () => {
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <p>Pizza Time!</p>
        <div className="link-container">
          <Link id="order-pizza" to="pizza">Make your Own Pizza</Link>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/pizza" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;