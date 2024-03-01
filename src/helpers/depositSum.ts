import { depositTermPersent } from "@/const/depositData";

export function resultPersent(deposits: string, depositDuration: number) {
  let persent = 0;
  switch (deposits) {
    case "Строковий":
      depositTermPersent.find((option) => {
        if (option.term === depositDuration) {
          persent = option.persent;
        }
      });
      break;
    case "Накопичувальний":
      break;
    case "На вимогу":
      break;
    default:
      alert("Я не знаю таких значень");
  }

  return (persent / 12) * depositDuration;
}
