function Canary(sound) {
  this.sound = sound;
  this.makeSound = function() {
    console.log('SOUND = ' + this.sound);
  };
}

exports.createCanary = function(sound) {
  return new Canary(sound);
};
