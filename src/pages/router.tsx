/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';
import HomePage from './Main/main';
import Login from './Login/login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default AppRoutes;
