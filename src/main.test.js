/* eslint-disable no-undefined */
import { Callable } from '@specialblend/callable';
import isConstructable from './main';

const constructables = [
    Number,
    String,
    Function,
    Array,
    Boolean,
    Object,
    class Foo {

    },
    class CallableFoo extends Callable {

    },
    function foo() {

    },
];

const nonConstructables = [
    0,
    1,
    true,
    false,
    'test',
    null,
    undefined,
    Symbol('foo'),
    Number.prototype,
    String.prototype,
    Function.prototype,
    Array.prototype,
    Boolean.prototype,
    Object.prototype,
    function *generatorFoo() {

    },
];

test('is a function', () => {
    expect(isConstructable).toBeFunction();
});

describe('works as expected', () => {
    test.each(nonConstructables)('returns false for non-constructable', obj => {
        expect(isConstructable(obj)).toBeFalse();
    });
    test.each(constructables)('returns true for non-constructable', obj => {
        expect(isConstructable(obj)).toBeTrue();
    });
});
