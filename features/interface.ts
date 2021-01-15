interface Reportable {
  getSummary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  getSummary(): string {
    return `A ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.getSummary());
};

printSummary(oldCivic);
