import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slice/themeSlice';

function Support() {
  const dispatch = useDispatch();
  dispatch(setCurrentPage('support'));
  return <h1>Support</h1>;
}

export default Support;
