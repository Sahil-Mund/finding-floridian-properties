import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
import { useProperty } from "hooks/useProperties";
import { getPropertyByTitle } from "backend/hasura-api";

interface PropertyDetailProps {
  // Add your component's props here
}

const PropertyDetail: React.FC<PropertyDetailProps> = (props) => {
  //TODO : later add logic for this
  const [propertyType, setPropertyType] = useState<"RENT" | "BUY">("BUY");

  // const STATIC_TYPE : "BUY" | "RENT" = "RENT";
  const { neighbourHood } =
    propertyType === "RENT" ? rentalApartmanetDetails : SalesApartmanetDetails;
  // // rentalApartmanetDetails

  const { properties, modifySelectedProperty, selectedProperty } =
    useProperty();
  const [gallery, SetGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  // const banner = {
  //   banner_img : properties.banner_img_url
  // }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  useEffect(() => {
    setLoading(true);
    let searchQuery = query.get("title") || "";
    const fetchPropertyByTitle = async () => {
      const response = await getPropertyByTitle(searchQuery as string);
      console.log(response);
      extractGalleryImages(response[0]?.Property_Galleries);
      modifySelectedProperty(response[0]);
      setLoading(false)
    };

    const extractGalleryImages = (images: any) => {
      const imgs = images
        .filter((ele: any) => ele.media_type === "gallery_images")
        .map((img: any) => img.url);

      SetGallery(imgs);
    };

    fetchPropertyByTitle();
  }, []);

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

  if(loading){
    return <>Loading...</>
  }

  return (
    <div className="property-container">
      <Banner data={selectedProperty} gallery={gallery} />
      <NeignborhoodDetails data={selectedProperty} />
      <ApartmentInfo
        data={selectedProperty}
        image= {gallery[0]}
        // ispremiumUser={ispremiumUser}
        // unLock={unLock}
        // onUnLock={handleUnlock}
      />
      <Gallery data={gallery} />
      

      {/* {ispremiumUser && <Gallery data={gallery} />} */}
      {/* <NeignborhoodDetails data={neighbourHood} />
      <ApartmentInfo
        data={ispremiumUser ? apartmentInfo : dummyApartmentDetails}
        ispremiumUser={ispremiumUser}
        unLock={unLock}
        onUnLock={handleUnlock}
      />

      {ispremiumUser && <Gallery data={gallery} />} */}
    </div>
  );
};

export default PropertyDetail;
