import store from '../store';
import { setIsFirstLoad } from './authSlice';

import { AuthState } from '../../types/storeType';

test('Updates a setIsFirstLoad', () => {
  store.dispatch(setIsFirstLoad(false));
  let state: AuthState = store.getState().auth;
  let setIsFirstLoadProp = state.isFirstLoad;
  expect(setIsFirstLoadProp).toBe(false);

  store.dispatch(setIsFirstLoad(true));
  state = store.getState().auth;
  setIsFirstLoadProp = state.isFirstLoad;
  expect(setIsFirstLoadProp).toBe(true);
});
