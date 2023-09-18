import store from '../store';
import { setBasketId, setPromo } from './basketSlice';

test('Updates basketId', () => {
  store.dispatch(setBasketId('Basket123'));
  const state = store.getState().basket;
  expect(state.basketId).toBe('Basket123');
});

test('Updates promo', () => {
  store.dispatch(setPromo('Discount10'));
  const state = store.getState().basket;
  expect(state.promo).toBe('Discount10');
});
