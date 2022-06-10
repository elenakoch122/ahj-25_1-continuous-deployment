import demo from '../app';

test('test app', () => {
    expect(demo('Hello')).toBe('Hello');
});
