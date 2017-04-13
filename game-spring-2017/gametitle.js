// gametitle.js
var gameTitle = function() {};

gameTitle.prototype = {
  preload: function() {
    console.log('gametitle:preload');
    var gameTitle = this.add.sprite(160, 160, 'gametitle');
    gameTitle.anchor.setTo(0.5, 0.5);

    var playButton = this.game.add.button(160, 320, 'play', this.playTheGame, this);
  },

  playTheGame: function() {
    console.log('gametitle:playTheGame');
    this.game.state.start('Game');
  },

  create: function() {
    console.log('gametitle:create');
  },
};
