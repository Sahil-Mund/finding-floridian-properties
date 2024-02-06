import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Banner,
  NeignborhoodDetails,
  ApartmentInfo,
  Gallery,
} from "../components";
import {
  rentalApartmanetDetails,
  SalesApartmanetDetails,
  dummyApartmentDetails,
} from "../assets/constansts";
import "../styles/property-detail.scss";
import { useUserModal } from "../hooks/useUserModal";

interface PropertyDetailProps {
  // Add your component's props here
}

const PropertyDetail: React.FC<PropertyDetailProps> = (props) => {
  //TODO : later add logic for this
  const [propertyType, setPropertyType] = useState<"RENT"|"BUY">("BUY");

  // const STATIC_TYPE : "BUY" | "RENT" = "RENT";
  const { banner, neighbourHood, gallery, ...apartmentInfo } =
    propertyType === "RENT" ? rentalApartmanetDetails : SalesApartmanetDetails;
  // rentalApartmanetDetails

  // const {
  //   state: { data },
  // } = useLocation();
  const [unLock, setUnLock] = useState<boolean>(false);
  const [ispremiumUser, setIspremiumUser] = useState<boolean>(true);
  const { onOpen } = useUserModal();

  const handleUnlock = () => {
    setUnLock(true);
    setTimeout(() => {
      // setIspremiumUser(true);
      onOpen();
      setUnLock(false); // TODO:  will remove this later
    }, 3000);
  };
  return (
    <div className="property-container">
      <Banner data={banner} propertyType={propertyType} />
      <NeignborhoodDetails data={neighbourHood} />
      <ApartmentInfo
        data={ispremiumUser ? apartmentInfo : dummyApartmentDetails}
        ispremiumUser={ispremiumUser}
        unLock={unLock}
        onUnLock={handleUnlock}
      />

      {ispremiumUser && <Gallery data={gallery} />}
    </div>
  );
};

export default PropertyDetail;
