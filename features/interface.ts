interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 1976,
  broken: true,
};

const repareVehicle = (vehicle: Vehicle) => {
  vehicle.broken = false;
};

repareVehicle(oldCivic);
