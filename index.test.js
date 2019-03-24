const __package = require('./index');

test('exports correctly', () => {
    expect(__package).toHaveProperty('isConstructable', expect.any(Function));
    expect(__package).toHaveProperty('default', __package.isConstructable);
});
