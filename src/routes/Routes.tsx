import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const RoutesConfig = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/plans/:name" element={<Plans />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  };
  
export default RoutesConfig;