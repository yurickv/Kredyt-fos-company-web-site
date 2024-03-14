import { creditTypesPersent } from "@/const/creditData";

export const getCreditPercent = (creditType: string): number => {
  const foundCredit = creditTypesPersent.find(
    (credit) => Object.keys(credit)[0] === creditType
  );
  return foundCredit ? Object.values(foundCredit)[0] : undefined;
};

function npv(payments: number[], discountRate: number): number {
  // Check if the arguments are valid.
  if (!Array.isArray(payments)) {
    throw new Error("The payments argument must be an array.");
  }
  if (isNaN(discountRate)) {
    throw new Error("The discountRate argument must be a number.");
  }

  // Calculate the present value of each cash flow.
  const presentValues: number[] = [];
  for (let i = 0; i < payments.length; i++) {
    presentValues[i] = payments[i] / Math.pow(1 + discountRate, i + 1);
  }

  // Calculate the net present value of the cash flows.
  const netPresentValue: number = presentValues.reduce((a, b) => a + b, 0);

  return netPresentValue;
}
