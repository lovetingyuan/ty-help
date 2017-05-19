## ty-help

[![Version](https://img.shields.io/npm/v/ty-help.svg "version")](https://www.npmjs.com/package/ty-help)
[![depend](https://david-dm.org/lovetingyuan/ty-help/status.svg "dependencies")](https://david-dm.org/lovetingyuan/ty-help)

Run command installed in local node modules

### install
`npm install -D ty-help`

### usage:
add npm run command in your package.json file:

```json
{
  "scripts": {
    "help": "ty-help"
  }
}
```
for example, if you want to get help info of [`http-server`](https://github.com/indexzero/http-server), you can simply run:

`npm run help http-server`

or you can run a command with other options, like:

`npm run help http-server -- "./public -p 8888"`

### License
MIT
