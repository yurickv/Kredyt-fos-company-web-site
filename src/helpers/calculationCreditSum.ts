import { creditTypesPersent } from "@/const/creditData";

export const getCreditPercent = (creditType: string): number => {
  const foundCredit = creditTypesPersent.find(
    (credit) => Object.keys(credit)[0] === creditType
  );
  return foundCredit ? Object.values(foundCredit)[0] : undefined;
};
