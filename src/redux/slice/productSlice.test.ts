import store from '../store';
import { setSelectedTag, setSelectedFilters } from './productSlice';

import { IFilters } from '../../types/storeType';

test('Updates selected tags', () => {
  store.dispatch(setSelectedTag(['Cross-Platform Multiplayer']));
  const state = store.getState().product;
  expect(state.selectedTag).toEqual(['Cross-Platform Multiplayer']);
});

test('Updates selected filtres', () => {
  store.dispatch(
    setSelectedFilters({
      genres: [],
      themes: [],
      tags: [],
      minPrice: 0,
      maxPrice: 40,
    } as IFilters),
  );
  const state = store.getState().product;
  expect(state.selectedFilters.minPrice).toBe(0);
  expect(state.selectedFilters.maxPrice).toBe(40);

  store.dispatch(
    setSelectedFilters({
      genres: ['Action'],
      themes: [],
      tags: [],
      minPrice: 20,
      maxPrice: 60,
    } as IFilters),
  );
  const updatedState = store.getState().product;
  expect(updatedState.selectedFilters.genres).toEqual(['Action']);
  expect(updatedState.selectedFilters.minPrice).toBe(20);
  expect(updatedState.selectedFilters.maxPrice).toBe(60);
});
