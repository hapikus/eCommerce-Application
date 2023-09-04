import store from '../store';
import { setCurrentPage } from './themeSlice';

test('Updates the current page', () => {
  store.dispatch(setCurrentPage('support'));
  const state = store.getState().theme;
  expect(state.currentPage).toBe('support');

  store.dispatch(setCurrentPage('notFound'));
  const updatedState = store.getState().theme;
  expect(updatedState.currentPage).toBe('notFound');
});
