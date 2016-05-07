define(['./center/a', './center/b'], function(a) {
  console.log(a);

  return {
    init: function(msg) {
      console.log(msg)
    }
  };
});