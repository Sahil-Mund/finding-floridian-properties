import React from "react";
import {
  ClockIcon,
  HomeIcon,
  BedroomIcon,
  BathIcon,
  VideoIcon,
} from "../../assets/svg";
import InfoTile from "./InfoTile";
import { formatText } from "../../common/helper";
import FeatureAndPerk from "./FeatureAndPerk";
import DummyFeatureAndPerk from "./DummyFeatureAndPerk";

interface ApartmentInfoProps {
  // Add your component's props here
  data: any;
  ispremiumUser: boolean;
  unLock: boolean;
  onUnLock: () => void;
}
const infoArr = [
  {
    icon: <HomeIcon />,
    title: "2-3 Guests",
  },
  {
    icon: <BedroomIcon />,
    title: "1 Bedroom",
  },
  {
    icon: <BathIcon />,
    title: "1 Private Bath",
  },
  {
    icon: <ClockIcon />,
    title: "30 days/more",
  },
];

const ApartmentInfo: React.FC<ApartmentInfoProps> = ({
  data,
  ispremiumUser,
  unLock,
  onUnLock,
}) => {
  const {
    apartmentDetails,
    apartmentFeatures,
    extendedPerks,
    extendedPerksDesc,
  } = data;

  return (
    <>
      <div className="apartment-info-container">
        <div className="apartment-summary">
          <h2 className="title">APARTMENT</h2>
          <div className="info-tiles">
            {infoArr.map((item) => {
              return <InfoTile {...item} />;
            })}
          </div>
          <hr />
          <div className="apartment-description">
            {/* {apartmentDetails.desc} */}
            {/* <p dangerouslySetInnerHTML={{ __html: apartmentDetails.desc }}></p> */}
            {formatText(apartmentDetails.desc).map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
        <div className="apartment-img">
          <img src={apartmentDetails.img} alt="" />
          <div>
            <VideoIcon />
            <span>Take a Virtual tour </span>
          </div>
        </div>
      </div>
      <hr />
      {ispremiumUser ? (
        <>
          {" "}
          <FeatureAndPerk
            details={{ apartmentFeatures, extendedPerks, extendedPerksDesc }}
          />
          <hr />
        </>
      ) : (
        <DummyFeatureAndPerk
          details={{ apartmentFeatures, extendedPerks, extendedPerksDesc }}
          unLock={unLock}
          onUnLock={onUnLock}
        />
      )}
    </>
  );
};

export default ApartmentInfo;
