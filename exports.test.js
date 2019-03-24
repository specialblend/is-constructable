import isConstructableES from './dist/index.esm';
import isConstructableCJS from './dist/index.cjs';
const isConstructableUMD = require('./dist/index.umd');

test('exports are importable', () => {
    expect(isConstructableUMD).toBeFunction();
    expect(isConstructableES).toBeFunction();
    expect(isConstructableCJS).toBeFunction();
});
