var spawn = require('cross-spawn');

var cli = process.argv[2]
var options = process.argv[3]

if (!cli) {
  console.log('no command found')
  console.log('\
    first, add "help\": \"ty-help" to the scripts field in the package.json, then\n\
    npm run help your_command (default option is "--help") \n\
    or \n\
    npm run help your_command -- "your_command_options" \n\
  ')
  return
}

if (options) {
  options = options.split(' ')
} else {
  options = ['--help']
}

// Spawn NPM asynchronously
var child = spawn(cli, options, { stdio: 'inherit' });

child.on('error', function(e) {
  console.log('errors:', e)
})
