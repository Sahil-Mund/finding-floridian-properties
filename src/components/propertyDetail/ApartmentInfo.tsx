import React from "react";
import {
  ClockIcon,
  HomeIcon,
  BedroomIcon,
  BathIcon,
  VideoIcon,
  LocationSmIcon,
  YellowStar,
  BlueTick,
  GreenTickIcon,
} from "../../assets/svg";
import InfoTile from "./InfoTile";
import { formatText } from "../../common/helper";
import FeatureAndPerk from "./FeatureAndPerk";
import DummyFeatureAndPerk from "./DummyFeatureAndPerk";

interface ApartmentInfoProps {
  // Add your component's props here
  data: any;
  // ispremiumUser: boolean;
  // unLock: boolean;
  // onUnLock: () => void;
  image: string;
}

const ApartmentInfo: React.FC<ApartmentInfoProps> = ({
  data,
  // ispremiumUser,
  // unLock,
  // onUnLock,
  image,
}) => {
  const {
    num_of_bathrooms,
    num_of_bedrooms,
    property_located_at,
    located_in_florida,
    state,
    property_type,
    city,
    flat_no,
    zip_code,
  } = data;

  const infoArr = [
    {
      icon: <BedroomIcon />,
      title: `${num_of_bedrooms} Bedroom`,
    },
    {
      icon: <BathIcon />,
      title: `${num_of_bathrooms} Private Bath`,
    },
    {
      icon: <HomeIcon />,
      title: `15,760 Sq.Ft`,
    },
    {
      icon: <LocationSmIcon />,
      title: `${state}`,
    },
  ];

  const ratingDetails = [
    {
      label: "Walkability",
      value: "walkability",
    },
    {
      label: "Closeness to Restaurents/Stores",
      value: "closeness_To_restaurant",
    },
    {
      label: "Proximity to Parks/Nature",
      value: "proximity_to_parks",
    },
    {
      label: "Quality of Schools",
      value: "quality_of_schools",
    },
    {
      label: "Distance to the Ocean",
      value: "distance_to_the_ocean",
    },
    {
      label: "Proximity to a lake",
      value: "proximity_to_lake",
    },
  ];

  const amenitiesDetails = [
    { label: "New Construction", value: "new_construction" },
    { label: "New Renovated", value: "newly_renovated" },
    { label: "Pool", value: "pool" },
    { label: "Gym", value: "gym" },
    { label: "Yard", value: "yard" },
    { label: "Luxury", value: "luxury" },
    { label: "Pet Friendly", value: "pet_friendly" },
    { label: "Parking", value: "parking" },
    { label: "Concierge", value: "concierge" },
    { label: "Waterfront", value: "waterfront" },
    { label: "In-Unit Laundry", value: "in_unit_laundry" },
  ];

  return (
    <>
      <div className="apartment-info-container">
        <div className="apartment-summary">
          <h2 className="title">{property_type}</h2>
          <div className="info-tiles">
            {infoArr.map((item) => {
              return <InfoTile {...item} />;
            })}
          </div>
          <hr />
          <div className="apartment-description">
            {/* {apartmentDetails.desc} */}
            {/* <p dangerouslySetInnerHTML={{ __html: apartmentDetails.desc }}></p> */}
            {/* {formatText(apartmentDetails.desc).map((para, index) => (
              <p key={index}>{para}</p>
            ))} */}
            <p>
              An incomparable view. And, you deserve the best St. Pete has to
              offer. Discover an indulgent city high rise with shopping, dining
              and cultural events right outside your door. Directly from your
              private balcony, you'll be surrounded by panoramic scenery of
              downtowns St. Petersburg's skyline and 244 miles of the sparkling
              Tampa Bay.
            </p>
          </div>
        </div>
        <div className="apartment-img">
          <img src={image} alt="" />
          <div>
            {/* <a href={apartmentDetails.video_src} target="_blank"> */}
            <VideoIcon />
            {/* </a> */}
            <span>Take a Home Tour</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="extra-details">
        <div className="rating-box">
          <h2 className="title">Rating</h2>
          <ul>
            {ratingDetails?.map((ele) => (
              <li>
                <span>{ele.label}: </span>
                &nbsp; &nbsp;
                <div className="stars">
                  {data && data.Rating && (
                    <>
                      {[...Array(data?.Rating[ele.value])].map((_, index) => (
                        <span key={index}>
                          <YellowStar className="no-external-fill" />
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="locality">
          <ul>
            <li></li>
          </ul>
        </div> */}
        <div className="amenities">
          <h2 className="title">Amenities</h2>
          <p>
            <b>Address: </b>
            {`${flat_no}, ${city}, ${state}, ${zip_code}`}
          </p>
          <span>
            The property is present in the <strong>{located_in_florida}</strong>{" "}
            part of florida. And it's located at &nbsp;
            <strong>{property_located_at}</strong> side.
          </span>
          <ul>
            {amenitiesDetails.map((ele, idx) => (
              <>
                {data?.Amenity && data?.Amenity[ele.value] && (
                  <li key={idx}>
                    <span>{ele.label}</span>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ApartmentInfo;
