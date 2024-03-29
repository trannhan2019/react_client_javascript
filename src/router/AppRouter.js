import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quantri from '../layouts/Quantri';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import Dashboard from '../pages/quantri/Dashboard';
import Product from '../pages/quantri/Product';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quantri" element={<Quantri />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
