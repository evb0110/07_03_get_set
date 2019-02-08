class Character {
  constructor(name, level, type, attack, defence, health) {
    this.name = name;
    this.level = level;
    this.type = type;
    this._attack = attack;
    this._defence = defence;
    this._health = health;
    this.powerCount = 3;
    this.powerUsed = false;
    this.powerOn = false;
  }

  powerMode() {
    if (this.powerUsed) return;
    this.powerOn = true;
  }

  doAttack() {
    if (this.powerCount > 1) {
      this.powerCount -= 1;
    } else if (this.powerCount == 1) {
      this.powerCount -= 1;
      this.powerUsed = true;
      this.powerOn = false;
    }
  }

  get attack() {
    if (this.powerOn) {
      return this._attack * 2;
    }
    return this._attack;
  }
  
  get defence() {
    if (this.powerOn) {
      return this._defence * 2;
    }
    return this._defence;
  }
  
  get health() {
    if (this.powerOn) {
      return this._health * 2;
    }
    return this._health;
  }
}

export default Character;