import { expiredDate } from "../../utils/formatter/times";
import { formatCurrency } from "../../utils/formatter/currency";
import styles from './style.module.css';

const calculateBarColor = (percentage: number): string => {
  if (percentage >= 1) {
    return 'rgb(218, 51, 107)';
  } else {
    return 'grey';
  }
};

type TCampaignData = {
  id: number;
  title: string;
  expired: number;
  image: string;
  donation_received: number;
  campaigner: string;
  donation_target: number;
  donation_percentage: number;
}

export interface Props {
  campaign: TCampaignData;
}

const CardCampaign: React.FC<Props> = ({ campaign }) => {
  const percentage = (campaign.donation_percentage * 100).toFixed(2);
    let checkComplete = "100";
    let status = "Tersedia";
    if (parseInt(percentage) <= 100) {
      checkComplete = percentage;
    }

    if (campaign.donation_target >= campaign.donation_received) {
      status = "Terkumpul";
    }
  return (
    <div className="bg-white flex md:block shadow-[0 1px 6px 0 rgba(0,0,0,.12)] rounded-xl">
      <div className="mr-5 md:mr-0 flex flex-1 items-center justify-center">
        <img src={campaign.image} alt={campaign.title} className="rounded-l-xl w-auto md:w-full md:rounded-t-xl md:rounded-bl-none h-[11rem] md:h-[14rem] bg-cover" />
      </div>
      <div className="pl-0 pr-4 md:px-4 pb-6 flex max-w-[45%] md:max-w-full flex-1 flex-col justify-between">
        <div className={`text-[12px] md:text-sm font-semibold pt-4 h-[3.5rem] overflow-hidden ${styles.title} `}>{campaign.title}</div>
        <div className="flex">
          <div className={`
            text-xs md:text-sm h-[3rem] md:h-auto whitespace-nowrap text-ellipsis overflow-hidden flex items-center 
            md:whitespace-normal md:overflow-auto
          `}>{campaign.campaigner}</div>
          <img
            src="/images/icons/icon__verified-org.svg"
            alt={campaign.campaigner}
            className="w-12 h-12 mx-[0.2rem]" />
        </div>
        <div className="relative h-[5px] bg-grey my-[0.5rem] bg-[#CEDCE1] rounded-full">
          <div
            className="absolute top-0 w-[10px] h-[5px] bg-[#02AEEE] rounded-r-full"
            style={{ left: `${checkComplete === '100' ? 'auto' : checkComplete}%` }}
          ></div>
          <div
            className="absolute h-full"
            style={{
              width: `${checkComplete}%`,
              backgroundColor: calculateBarColor(campaign.donation_percentage),
            }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-[#4A4A4A]">
          <div className="text-xs md:text-sm">{status}</div>
          <div className="text-xs md:text-sm">{status === 'Terkumpul' && 'Sisa hari'}</div>
        </div>
        <div className="flex justify-between text-[#4A4A4A]">
          <div className="text-xs md:text-sm font-semibold">
            <span>Rp </span>
            <span>{formatCurrency(campaign.donation_received)}</span>
          </div>
          <div className="text-xs md:text-sm font-semibold">{expiredDate(campaign.expired)}</div>
        </div>
        <div className="text-[10px] text-[#f37]">
          <span>dari Rp </span>
          <span>{formatCurrency(campaign.donation_target)}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCampaign;
