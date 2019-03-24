const __package__ = require('./dist/index.umd');

test('imports correctly with require', () => {
    expect(__package__).toBeFunction();
});
