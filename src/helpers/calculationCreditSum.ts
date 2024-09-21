import { creditTypesPersent } from "@/const/creditData";

export const getCreditPercent = (creditType: string): number => {
  const foundCredit = creditTypesPersent.find(
    (credit) => Object.keys(credit)[0] === creditType
  );
  return foundCredit ? Object.values(foundCredit)[0] : undefined;
};

export function calculateIRR(cashFlows: number[]): number {
  const tolerance = 1e-6;
  const maximumIterations = 100;

  function NPV(rate: number): number {
    let npv = 0;
    for (let i = 0; i < cashFlows.length; i++) {
      npv += cashFlows[i] / Math.pow(1 + rate, i);
    }
    return npv;
  }

  function derivative(rate: number): number {
    let d = 0;
    for (let i = 0; i < cashFlows.length; i++) {
      d -= (i * cashFlows[i]) / Math.pow(1 + rate, i + 1);
    }
    return d;
  }

  let guess = 0.1;
  let nextGuess = 0;

  for (let i = 0; i < maximumIterations; i++) {
    nextGuess = guess - NPV(guess) / derivative(guess);
    if (Math.abs(nextGuess - guess) < tolerance) {
      return nextGuess;
    }
    guess = nextGuess;
  }

  throw new Error("IRR calculation did not converge");
}

export function generatePayments(
  payment: number,
  duration: number,
  targetSum: number,
  repaymentType: string
) {
  const payments = [targetSum];

  for (let i = 0; i < duration; i++) {
    if (repaymentType === "Сума в кінці" && i + 1 === duration) {
      payments.push((payment + targetSum) * -1);
    } else {
      payments.push(payment * -1);
    }
  }
  return payments;
}
