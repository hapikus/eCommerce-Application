import { Route, Routes } from 'react-router-dom';
import HomePage from './Main/main';
import LoginPage from './Login/login';
import NotFound from './404/notFound';
import SignUp from './SignUp/signup';
import Support from './Support/support';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRoutes;
