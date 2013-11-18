## Doccy

[![Build Status](https://travis-ci.org/jackfranklin/doccy.png)](https://travis-ci.org/jackfranklin/doccy)
```
$ npm install -g doccy
```

Automatic generation of documentation READMEs.

(Still very much under development).

### Example

You can see a full example of generated documentation in the `docs` folder.

Given a test file:

```

/*
 * @object thing
 * @description a module of things
 */
var thing = {
    /*
     * @name foo
     * @description a cool function
     * @param x does something
     * @returns a number
     */
    foo: function(x) {
        return 42;
    }
}
```

Running:

```
$ doccy test.js test.md
```

Will create `test.md` that looks like so:

```
## `thing`

_a module of things_

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
- `@object {name}` - denotes a "containing" object (see above example, which is much clearer)

### TODO

- allow options for changing Markdown formatting
- make CLI tool take a glob or directory, and output a new MD file for each JS file it finds
- add more keys
- make a Grunt plugin
- document programmatical usage

### Changelog

__0.0.3__
- added `object` key for denoting a "containing" object

__0.0.2__
- added `description` key

__0.0.1__
- initial release

