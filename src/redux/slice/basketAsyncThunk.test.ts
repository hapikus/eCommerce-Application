import { addItemToBasket, getBasketItems } from './basketSlice';

describe('basket/addItem', () => {
  it('should addItemToBasket rejected with Error', async () => {
    const mockBasketAddData = {
      basketId: 'basketId123',
      gameTitle: 'EVE Online',
    };
    const dispatch = jest.fn();
    const thunk = addItemToBasket(mockBasketAddData);

    await thunk(dispatch, () => {}, '_');
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe('basket/addItem/pending');
    expect(end[0].type).toBe('basket/addItem/rejected');
    expect(end[0].payload).toBe('An unknown error occurred');
  });
});

describe('basket/getBasketItems', () => {
  it('should getBasketItems rejected with Error', async () => {
    const mockBasketId = 'basketId123';
    const dispatch = jest.fn();
    const thunk = getBasketItems(mockBasketId);

    await thunk(dispatch, () => {}, '_');
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe('basket/getBasketItems/pending');
    expect(end[0].type).toBe('basket/getBasketItems/rejected');
    expect(end[0].payload).toBe('An unknown error occurred');
  });
});
