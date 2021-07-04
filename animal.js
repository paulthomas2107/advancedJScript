export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound) {
    return sound;
  }

  static showPrice() {
    return Math.random(10000) * 0.1;
  }

  get metaData() {
    return `Type: ${this.type} Legs: ${this.legs}`;
  }
}
