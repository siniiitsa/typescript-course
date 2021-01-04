const fantaAsObject = {
  color: 'orange',
  carbonated: true,
  sugarContent: 30,
};

// we can store the drink above as tupol data type
const fantaAsTupol: [string, boolean, number] = ['orange', true, 30];

// alias for a Drink tupol type
type Drink = [string, boolean, number];

const pepsi: Drink = ['black', true, 50];
const lemonade: Drink = ['yellow', true, 20];
