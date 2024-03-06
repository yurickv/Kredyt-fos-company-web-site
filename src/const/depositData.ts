export const depositTermPersent = [
  { term: 3, persent: 0.14 },
  { term: 12, persent: 0.15 },
  { term: 18, persent: 0.17 },
  { term: 24, persent: 0.18 },
  { term: 36, persent: 0.2 },
  { term: 48, persent: 0.23 },
];

export const depositAccumPersent = [
  { term: 12, persent: 0.14 },
  { term: 18, persent: 0.15 },
];

export const terminableDeposit = {
  title: "Строковий",
  termOne: false,
  termTwo: true,
  termThree: false,
  termFour: true,
  termine: [3, 12, 18, 24, 36, 48],
  rate: [14, 15, 17, 18, 20, 23],
};

export const onDemandDeposit = {
  title: "На вимогу",
  termOne: true,
  termTwo: true,
  termThree: true,
  termFour: true,
  termine: ["0-48"],
  rate: [8],
};
export const accumulativeDeposit = {
  title: "Для накопичення",
  termOne: true,
  termTwo: true,
  termThree: false,
  termFour: true,
  termine: [12, 18],
  rate: [14, 15],
};
