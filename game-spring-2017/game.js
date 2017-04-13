// game.js
var theGame = function() {};

theGame.prototype = {
  preload: function() {
    console.log('game:preload');
  },

  create: function() {
    console.log('game:create');
  },
}
