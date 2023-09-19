import getRandomColor from './getRandomColor';

describe('getRandomColor', () => {
  it('should return a string', () => {
    const color = getRandomColor();
    expect(typeof color).toBe('string');
  });

  it('should return a valid hex color', () => {
    const color = getRandomColor();
    const hexColorPattern = /^#[0-9A-F]{6}$/i;

    expect(hexColorPattern.test(color)).toBe(true);
  });

  it('should return a different color on each call', () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();

    expect(color1).not.toBe(color2);
  });
});
