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
    powerOn: false
  };

  expect(john).toEqual(expected);
});

test('testing powerMode without attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerMode();

  const { attack, defence, health } = john;
  const expected = { attack: 200, defence: 400, health: 100 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerMode on one attack', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerMode();
  john.doAttack();

  const { attack, defence, health } = john;
  const expected = { attack: 200, defence: 400, health: 100 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerMode on two attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerMode();
  john.doAttack();
  john.doAttack();

  const { attack, defence, health } = john;
  const expected = { attack: 200, defence: 400, health: 100 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerMode on three attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerMode();
  john.doAttack();
  john.doAttack();
  john.doAttack();

  const { attack, defence, health } = john;
  const expected = { attack: 100, defence: 200, health: 50 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing powerMode on four attacks', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerMode();
  john.doAttack();
  john.doAttack();
  john.doAttack();
  john.powerMode();

  const { attack, defence, health } = john;
  const expected = { attack: 100, defence: 200, health: 50 };
  expect({ attack, defence, health }).toEqual(expected);
});

test('testing second powerMode, should silently fail', () => {
  const john = new Character('John', 1, 'Bowman', 100, 200, 50);
  john.powerMode();
  john.doAttack();
  john.doAttack();
  john.doAttack();
  john.powerMode();

  const { attack, defence, health } = john;
  const expected = { attack: 100, defence: 200, health: 50 };
  expect({ attack, defence, health }).toEqual(expected);
});
