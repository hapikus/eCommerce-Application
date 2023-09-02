import store from '../store';
import { setIsFirstLoad } from './authSlice';

test('Updates a setIsFirstLoad', () => {
  store.dispatch(setIsFirstLoad(false));
  let state = store.getState().auth;
  let setIsFirstLoadProp = state.isFirstLoad;
  expect(setIsFirstLoadProp).toBe(false);

  store.dispatch(setIsFirstLoad(true));
  state = store.getState().auth;
  setIsFirstLoadProp = state.isFirstLoad;
  expect(setIsFirstLoadProp).toBe(true);
});
