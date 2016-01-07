//var a = require('./center/a');
//require('./center/b');
//console.log(a);

require(['./center/a', './center/b'], function(a) {
  console.log(a);
});