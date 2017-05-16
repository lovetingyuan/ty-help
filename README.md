## ty-help
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
for example, if you want to get help info for [`http-server`](https://github.com/indexzero/http-server), you can simply run:

`npm run help http-server`

or you can run a command with other options, like:

`npm run help http-server -- "./public -p 8888"`

### License
MIT
