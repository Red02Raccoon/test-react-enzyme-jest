### Notes:

- NODE_PATH=src/ (.env - set absolute path)
- jsdom - simulate how browser works
- src/setupTest.js - config, init before all tests (add config for Adapter)
- it, expect - global functions
- изменения внутри дочернего компонента - не должны ломать тест родителя

```
it('description', () => {
'test logic'
})
```

```
expect('some value / selector').matcher('value / ')
```

## JEST(matchers):

- .toHaveAnInstanceOf(Instance)
- .toContain('string')
- .toBeTruthy()
- .toHaveBeenCalledWith(args)
- .toEqual(value) - to compare recursively all properties of object instances
- .toBe(value) - to compare primitive values or to check referential identity of object instances, do not use for float numbers
- jest.spyOn(object, methodName) - Creates a mock function similar to jest.fn but also tracks calls to object[methodName]. Returns a Jest mock function.

- describe(name, fn) - creates a block that groups together several related tests
- test(name, fn, timeout)
- it(name, fn, timeout)
- beforeEach(()=> {}, timeout) - before each of the tests in this file runs.
- afterEach(()=> {}, timeout)

## ENZYME:

- static -> static HTML (not allow simulate click)
- shallow -> render just the given component (without children)
- full (mount) -> component + children (need .unmount())

- .shallow()
- .mount()
- .unmount()

- .find(Instance/selector) => []
- .prop(key) => Any
- .props() => {}
- .simulate('event', {})
- .update()
