var spawn = require('cross-spawn');
var path = require('path')
var fs = require('fs')

module.exports = function(args) {
  if (!args || args.length === 0) {
    args = process.argv
  }
  var cli = args[2]
  var options = args[3]

  var showUsage = function() {
    console.log('usage:\n\
      first, add "help\": \"ty-help" to the scripts field in the package.json, then\n\
      npm run help your_command (default option is "--help") \n\
      or \n\
      npm run help your_command -- "your_command_options" \n\
    ')
  }
  if (!cli) {
    console.log('no command found')
    showUsage()
    var pkgPath = path.resolve(process.cwd(), 'package.json')
    if(fs.existsSync(pkgPath)) {
      var pkg = require(pkgPath)
      if(!pkg.scripts) return
        console.log('scripts list:')
      for(var cmd in pkg.scripts) {
        console.log('  ' + cmd + ': ', pkg.scripts[cmd])
      }
    }
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
    showUsage()
  })

}
