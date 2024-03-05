import {
  accumulativeDeposit,
  onDemandDeposit,
  terminableDeposit,
} from "@/const/depositData";
import { InfoCardDeposit } from "./infoCardDeposit";

export const SectionInfoCard = () => {
  return (
    <section className="bg-netural_100 py-[50px]">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Умови депозиту</h2>

        <InfoCardDeposit term={terminableDeposit} />
        <InfoCardDeposit term={accumulativeDeposit} />
        <InfoCardDeposit term={onDemandDeposit} />
      </div>
    </section>
  );
};
