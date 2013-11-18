## Doccy

[![Build Status](https://travis-ci.org/jackfranklin/doccy.png)](https://travis-ci.org/jackfranklin/doccy)
```
$ npm install -g doccy
```

Automatic generation of documentation READMEs.

(Still very much under development).

### Example

Given a test file:

```
/*
 * @name foo
 * @description a cool function
 * @param x does something
 * @returns a number
 */
var foo = function(x) {
    return 42;
};
```

Running:

```
$ doccy test.js test.md
```

Will create `test.md` that looks like so:

```
### `foo`

_a cool function_

Parameters:

- `x`: does something

**Returns:** a number
```

### Supported Keys

Order is not important.

- `@name {function name}`
- `@description {function description}`
- `@param {name} {description}`
- `@returns {description}`

### TODO

- allow options for changing Markdown formatting
- make CLI tool take a glob or directory, and output a new MD file for each JS file it finds
- add more keys

