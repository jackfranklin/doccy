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
$ doccy test.js -o docs
```

Will create `docs/test.md` that looks like so:

```
## `thing`

_a module of things_

### `foo`

_a cool function_

Parameters:

- `x`: does something

**Returns:** a number
```

### CLI Globbing

Rather than specify each file individually, the more common use of Doccy's small CLI tool is to pass in a glob:

```
$ doccy "src/*.js"
```

Will create a Markdown documentation file for each JS file within the `src` directory. By default doccy will put these into a `docs` folder, that it will create if needed, but you can specify the output directory with the `-o` flag:

```
$ doccy "src/*.js" -o documentation
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
- add more keys
- make a Grunt plugin
- document programmatical usage

### Contributors
Thanks to the following people for their help :)
- [Jonathan Fielding](http://twitter.com/jonathanfielding).

### Contributing

Please follow the existing style of code - recommend using [EditorConfig](http://editorconfig.org/) to help you out with this.

To generate documentation, run `npm run doccy`.

### Changelog

__0.0.3__
- added `object` key for denoting a "containing" object

__0.0.2__
- added `description` key

__0.0.1__
- initial release

