const add = (a: number, b: number): number => {
  return a + b;
};

function subtract(a: number, b: number): number {
  return a - b;
}

const throwError = (msg: string): never => {
  throw new Error(msg);
};

const possiblyThrowError = (msg: string): void => {
  if (msg) throw new Error(msg);
};

const logWeather1 = (forecast: { date: Date; temp: number }): void => {
  const { date, temp } = forecast;
  console.log(`It is going to be ${temp}C on ${date}.`);
};

const logWeather2 = ({ date, temp }: { date: Date; temp: number }): void => {
  console.log(`It is going to be ${temp}C on ${date}.`);
};
