import { depositAccumPersent, depositTermPersent } from "@/const/depositData";

export function resultPersent(
  deposits: string,
  depositDuration: number,
  targetSum: number
) {
  let persent = 0;
  if (200 > targetSum || targetSum > 50000) return persent;

  switch (deposits) {
    case "Строковий":
      depositTermPersent.find((option) => {
        if (option.term === depositDuration) {
          persent = option.persent;
        }
      });
      break;
    case "Накопичувальний":
      depositAccumPersent.find((option) => {
        if (option.term === depositDuration) {
          persent = option.persent;
        } else {
          persent = 0.14;
        }
      });
      break;
    case "На вимогу":
      persent = 0.08;
      break;
    default:
      alert("Я не знаю таких значень");
  }

  return (persent / 12) * depositDuration;
}
