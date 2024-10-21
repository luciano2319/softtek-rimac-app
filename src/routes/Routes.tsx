import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Plans from '../pages/Plans';

const RoutesConfig = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        {/*
        <Route path="/summary" element={<Summary />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  };
  
export default RoutesConfig;