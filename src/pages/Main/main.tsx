import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';

function MainPage() {
  const dispatch = useDispatch();
  dispatch(setCurrentPage('main'));
  return <h1>Main Page</h1>;
}

export default MainPage;
