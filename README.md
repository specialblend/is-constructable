# is-constructable
check if provided function is constructable (can be called with new keyword)

### install
```
npm i @specialblend/is-constructable
```

### example

```javascript
import isConstructable from '@specialblend/is-constructable'

isConstructable('foo') // false
isConstructable(true) // false
isConstructable(false) // false
isConstructable(null) // false
isConstructable(undefined) // false
isConstructable(Symbol('foo')) // false
isConstructable(function *generatorFoo() {}) // false

isConstructable(Boolean) // true
isConstructable(Number) // true
isConstructable(String) // true
isConstructable(Array) // true
isConstructable(Object) // true
isConstructable(Promise) // true
isConstructable(class Foo {}) // true
isConstructable(function foo() {}) // true

```
