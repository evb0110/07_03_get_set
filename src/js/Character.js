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
    this._powerOn = false;
  }

  set powerOn(boolValue) {
    if (!boolValue) {
      this._powerOn = false;
      return;
    }
    if (this.powerUsed) throw new Error('impossible to use powerOn for the 2nd time');
    if (this._health <= 0) throw new Error('impossible to powerOn a dead character');
    this._powerOn = true;
    this.powerUsed = true;
  }

  get powerOn() {
    return this._powerOn;
  }

  doAttack() {
    if (this.powerCount > 1) {
      this.powerCount -= 1;
    } else if (this.powerCount === 1) {
      this.powerCount -= 1;
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
