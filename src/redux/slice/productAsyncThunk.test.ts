import { fetchProductData, fetchRandProducts } from './productSlice';

describe('product/fetchProductData', () => {
  it('should fetchProductData rejected with Error', async () => {
    const mockGameTitle = 'The Best Game';
    const dispatch = jest.fn();
    const thunk = fetchProductData(mockGameTitle);

    await thunk(dispatch, () => {}, '_');
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe('product/fetchProductData/pending');
    expect(end[0].type).toBe('product/fetchProductData/rejected');
    expect(end[0].payload).toBe('An unknown error occurred');
  });
});

describe('product/fetchRandProducts', () => {
  it('should fetchRandProducts rejected with Error', async () => {
    const mockNumber = 3;
    const dispatch = jest.fn();
    const thunk = fetchRandProducts(mockNumber);

    await thunk(dispatch, () => {}, '_');
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe('product/fetchRandProducts/pending');
    expect(end[0].type).toBe('product/fetchRandProducts/rejected');
    expect(end[0].payload).toBe('An unknown error occurred');
  });
});
