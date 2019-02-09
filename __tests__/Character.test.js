import Character from '../src/js/Character';

test('testing creation of a character', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  const expected = {
    name: 'John',
    level: 1,
    type: 'Bowman',
    _attack: 100,
    _defence: 200,
    _health: 50,
    powerCount: 3,
    powerUsed: false,
    _powerOn: false,
  };

  expect(john).toEqual(expected);
});

test('testing powerOn without attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerOn = true;

  const { attack, defence, health } = john;
  const expected = { attack: 200, defence: 400, health: 100 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerOn on one attack', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerOn = true;
  john.doAttack();

  const { attack, defence, health } = john;
  const expected = { attack: 200, defence: 400, health: 100 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerOn on two attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerOn = true;
  john.doAttack();
  john.doAttack();

  const { attack, defence, health } = john;
  const expected = { attack: 200, defence: 400, health: 100 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerOn on three attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerOn = true;
  john.doAttack();
  john.doAttack();
  john.doAttack();

  const { attack, defence, health } = john;
  const expected = { attack: 100, defence: 200, health: 50 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerOn on four attacks, should throw', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerOn = true;
  john.doAttack();
  john.doAttack();
  john.doAttack();


  const makeResult = () => { john.powerOn = true; };

  expect(makeResult).toThrow();
});

test('testing second powerOn, should throw', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerOn = true;
  john.doAttack();
  john.doAttack();
  john.doAttack();

  const makeResult = () => { john.powerOn = true; };

  expect(makeResult).toThrow();
});

test('testing second powerOn on a dead character, should throw', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 0);

  const makeResult = () => { john.powerOn = true; };

  expect(makeResult).toThrow();
});
