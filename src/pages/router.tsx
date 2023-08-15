import { Route, Routes } from 'react-router-dom';
import HomePage from './Main/main';
import Login from './LoginPageExample/login';
import NotFound from './404/notFound';
import SignUp from './SignUp/signup';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;
