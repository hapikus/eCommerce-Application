import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';

function InfoPage() {
  const dispatch = useDispatch();
  dispatch(setCurrentPage('info'));
  return <h1>Information</h1>;
}

export default InfoPage;
