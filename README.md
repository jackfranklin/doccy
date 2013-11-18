## Doccy

```
$ npm install -g doccy
```


Automatic generation of documentation READMEs.

### Example

Given a test file:

```
/* DOC
 * @name foo
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

Parameters:

- `x`: does something

**Returns:** a number
```
