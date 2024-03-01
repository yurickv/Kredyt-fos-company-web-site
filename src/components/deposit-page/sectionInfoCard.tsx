import { terminableDeposit } from "@/const/depositData";
import { InfoCardDeposit } from "./infoCardDeposit";

export const SectionInfoCard = () => {
  return (
    <section className="bg-netural_100 py-[50px]">
      <div className="div-container">
        <h2 className="title">Умови депозиту</h2>
        <div>
          <InfoCardDeposit term={terminableDeposit} />
        </div>
      </div>
    </section>
  );
};
