import { InfoCardCredit } from './infoCardCredit';
import {
  creditСonsumer,
  creditOnBail,
  creditEntrepreneurial,
  creditFarming,
} from '@/const/creditData';

export const SectionInfoCard = () => {
  return (
    <section className="bg-netural_100 py-[50px]">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Види кредитів</h2>
        <div className="flex gap-6 flex-wrap">
          <InfoCardCredit term={creditСonsumer} />
          <InfoCardCredit term={creditOnBail} />
          <InfoCardCredit term={creditEntrepreneurial} />
          <InfoCardCredit term={creditFarming} />
        </div>
      </div>
    </section>
  );
};
