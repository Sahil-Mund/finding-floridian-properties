import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonModal from "./buttonModal";

import {
  BathSmIcon,
  BedRoomSmIcon,
  HomeSmIcon,
  LocationSmIcon,
  LockIcon,
  NextArrowIcon,
  UnlockIcon,
} from "../../assets/svg";
import {  useUserModal } from "../../hooks/useUserModal";

interface RecommendationPostCardProps {
  // Add your component's props here
  data: any[];
}

const RecommendationPostCard: React.FC<RecommendationPostCardProps> = ({
  data,
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [unLock, setUnLock] = useState<boolean>(false);
  const [ispremiumUser, setIspremiumUser] = useState<boolean>(false);

  const { onOpen } = useUserModal();

  const handleUnlock = async () => {
    setUnLock(true);
    setTimeout(() => {
      setIspremiumUser(false);
      onOpen();
      setUnLock(false); // TODO:  will remove this later
    }, 3000);

     
  };
  const handleModal = (
    e: React.MouseEvent<HTMLSpanElement | HTMLDivElement>,
    isVisibe: boolean
  ) => {
    setIsModalVisible(isVisibe);
    e.stopPropagation();
  };

  return (
    <section className="recommendation-post-section">
      <div className="container-box" onClick={(e) => handleModal(e, false)}>
        <h2>Here are the top picks from your Home Girl.</h2>
        <h1>Magnolia Heights, St Petersburg, Florida</h1>
        <p>
          Our advanced AI has analyzed your preferences and handpicked three
          exceptional properties that offer a unique blend of features that
          match your ideal Florida lifestyle.
        </p>
     

        <div className="post-items">
          {data?.map((ele, index) => (
            <div className="post-item" key={index}>
              <div className="item-image">
                <img src={ele.image} alt={ele.title} />
                <Link to={ele.url}>
                  {" "}
                  <span> View Details </span>
                  <NextArrowIcon />
                </Link>
              </div>

              {ispremiumUser || index === 0 ? (
                <div className="item-content">
                  <h2 className="item-price">{ele.price}</h2>
                  <h2 className="item-title">{ele.title}</h2>

                  <div className="item-amenities">
                    <div className="amenity amenity-1">
                      <BedRoomSmIcon />

                      {ele.amenitie1}
                    </div>
                    <div className="amenity amenity-2">
                      <BathSmIcon />

                      {ele.amenitie2}
                    </div>
                    <div className="amenity amenity-3">
                      <HomeSmIcon />
                      {ele.amenitie3}
                    </div>
                    <div className="amenity amenity-4">
                      <LocationSmIcon />
                      {ele.amenitie4}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`btn-unlock ${unLock && "animated"}`}>
                    {unLock ? (
                      <>
                        {" "}
                        <UnlockIcon className="unlock-icon" />
                        {/* <LockIcon className="lock-icon" /> */}
                      </>
                    ) : (
                      <>
                        <span onClick={handleUnlock} className="pointer">
                          Unlock Premium Insights
                        </span>
                        <LockIcon className="lock-icon" />
                      </>
                    )}
                  </div>
                  <div className="item-content dummy-content">
                    <h2 className="item-price">$4,600</h2>
                    <h2 className="item-title">Magnolia Heights</h2>

                    <div className="item-amenities">
                      <div className="amenity amenity-1">
                        <BedRoomSmIcon />1 Bedroom
                      </div>
                      <div className="amenity amenity-2">
                        <BathSmIcon />1 Private Bath
                      </div>
                      <div className="amenity amenity-3">
                        <HomeSmIcon />
                        XYZ sq.ft
                      </div>
                      <div className="amenity amenity-4">
                        <LocationSmIcon />
                        Central Florida
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="bottom-section">
          <Link to={"/contact-us"}>
            <button>Talk with your Home Girl</button>
          </Link>
          <p onClick={(e) => handleModal(e, true)}>
            Not happy with the results?
          </p>
        </div>
      </div>
      <div
        className="Modal"
        style={{ display: isModalVisible ? "block" : "none" }}
      >
        <ButtonModal />
      </div>
    </section>
  );
};

export default RecommendationPostCard;
