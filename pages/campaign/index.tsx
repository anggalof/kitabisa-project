import { useEffect, useState } from "react";
import { AppContext } from "next/app";
import { useAppSelector, useAppDispatch } from '../../lib/hooks'
import { fetchCampaign } from "../../lib/campaign/campaignAction";
import { TCampaign, Datum } from "../../service/type";
import Loading from "../../components/element/Loading";
import CardCampaign from "../../components/common/CardCampaign";
import styles from './style.module.css';

export default function Campaign() {
  const [campaign, setCampaign] = useState<TCampaign>({
    response_code: '',
    response_desc: {
      id: '',
      en: ''
    },
    data: []
  });
  const [isOpenSortBy, setOpenSortBy] = useState<boolean>(false);
  const campaignData = useAppSelector(state => state.campaign.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCampaign());
  }, []);

  useEffect(() => {
    setCampaign(campaignData);
  }, [campaignData]);

  const handleOpenSortBy = () => {
    if (isOpenSortBy) {
      setOpenSortBy(false);
    } else {
      setOpenSortBy(true);
    }
  }

  const handleSortByDonation = () => {
    if (Object.keys(campaign).length !== 0) {
      const list = campaign.data.slice();
      const sortByField = list.sort((a: Datum, b: Datum) => a.donation_target - b.donation_target)
      const payload = {
        response_code: campaign.response_code,
        response_desc: campaign.response_desc,
        data: sortByField,
      }
      setCampaign(payload);
      setOpenSortBy(false);
    }
  }

  const handleSortByDaysLeft = () => {
    if (Object.keys(campaign).length !== 0) {
      const list = campaign.data.slice();
      const sortByField = list.sort((a: any, b: any) => a.expired - b.expired)
      const payload = {
        response_code: campaign.response_code,
        response_desc: campaign.response_desc,
        data: sortByField,
      }
      setCampaign(payload);
      setOpenSortBy(false);
    }
  }

  return (
    <div className={styles.root}>
      <div className="container">
        <div className="flex pt-0 pb-10">
          <div className="flex items-center mr-auto">
            <img src="/images/logo.png" className="rounded-[50%] w-[4rem] h-[4rem]" alt="user-profile" />
            <span className="text-[#2B2D29] pl-2 text-lg">Kitabisa</span>
          </div>
          <div className="relative cursor-pointer flex items-center">
            <div onClick={handleOpenSortBy} className="text-center rounded-md py-2 px-4 md:py-4 md:px-6 font-semibold text-xs md:text-sm bg-[#02AEEF] text-white hover:bg-white hover:text-black">
              Sorting by Donation Goal
            </div>
            {isOpenSortBy && (
              <div className="absolute top-[2.85rem] md:top-[3.25rem] bg-white text-black w-full">
                <div className="line-height-4 px-0 py-2 md:p-4 text-sm text-center hover:bg-[#02AEEF]" onClick={handleSortByDonation}>Sort by Donation Goals</div>
                <div className="line-height-4 px-0 py-2 md:p-4 text-sm text-center hover:bg-[#02AEEF]" onClick={handleSortByDaysLeft}>Sort by Lefts Day</div>
              </div>
            )}
          </div>
        </div>
        <div className="text-md md:text-2xl w-[9rem] md:w-[12.5rem] text-white bg-[#FE8556] py-2 px-5 rounded-2xl ">
          Campaign List
        </div>
        {Object.keys(campaign).length !== 0 ? (
          <div className={`text-black pt-10 flex justify-center ${styles.grid}`}>
            {campaign.data.map((item: Datum) => {
              return (
                <div key={item.id}>
                  <CardCampaign campaign={item} />
                </div>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  }
}
