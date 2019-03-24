import isConstructableES from './dist/index.esm';
import isConstructableCJS from './dist/index.cjs';

test('imports correctly with import', () => {
    expect(isConstructableES).toBeFunction();
    expect(isConstructableCJS).toBeFunction();
});
