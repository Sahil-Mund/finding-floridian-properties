import React from "react";
import {
  BlueTick,
  GalleryIcon,
  YellowStar,
  LocationIcon,
} from "../../assets/svg";
import { formatText } from "../../common/helper";
import { Link } from "react-router-dom";
import { ADMIN_MAIL_ID } from "assets/constansts";

interface BannerProps {
  // Add your component's props here
  data: any;
  gallery: any
  // propertyType: "RENT" | "BUY";
}

const Banner: React.FC<BannerProps> = ({ data, gallery }) => {
  // const {
  //   propertyOwner: { email: propertyOwnerEmail },
  // } = data;

  

  const {
    banner_img_url,
    service_type,
    title,
    description,
    subtitle,
    state,
    zip_code,
    price,
    flat_no,
    city
    // User: { email: propertyOwnerEmail } = ,
  } = data;

  const handleContactProperty = () => {
    // TODO : write logic for sending email
    // console.log(`Email Sent to ${propertyOwnerEmail}`);
  };

  return (
    <section className="banner">
      <div className="image-container">
        <img className="banner-image" src={banner_img_url} alt="" />
        <Link to={`/property-details/gallery`}
        state={{
          gallery,
          title,
          subtitle
        }}
        >
          <div>
            <GalleryIcon />
            <span>Show all photos</span>
          </div>
        </Link>
      </div>
      <div className="banner-details">
        <span className="heading">
          {title} <BlueTick className="no-external-fill" />{" "}
        </span>
        <span className="sub-heading">{subtitle}</span>
        {/* <i>{description}</i> */}
        {/* //TODO: review and rating to be fetched later */}
        <div className="ratings">
          <span>
            <YellowStar className="no-external-fill" />{" "}
            <b>{data.rating || 0}</b>{" "}
            <span className="reviews">({data.review || 0} reviews )</span>
          </span>
          <span>
            <LocationIcon
              className="no-external-fill"
              style={{ width: "14px", height: "14px" }}
            />{" "}
           <span> {state}</span>
          </span>
        </div>

        <div className="descriptions">
          <p>{description}</p>
          {/* {formatText(description).map((para, index) => (
            <p key={index}>{para}</p>
          ))} */}
        </div>
        <div className="price">
          <span>${price}</span>
          {service_type === "rent" && <span>/per month</span>}
        </div>

        <div className="btns">
          {/* <Link
            to={"/contact-us"}
            style={{
              width: service_type !== "rent" ? "100%" : "",
            }}
          > */}
          <a
            href={ADMIN_MAIL_ID}
            style={{
              width: service_type !== "rent" ? "100%" : "",
            }}
          >
            <button
              className="btn-primary"
              style={{
                width: service_type !== "rent" ? "100%" : "",
                maxWidth: service_type !== "rent" ? "100%" : "400px",
              }}
            >
              Talk with your home girl
            </button>
          </a>

          {/* Hiding the below button in Buy properties */}
          {service_type === "rent" && (
            <button className="btn-primary" onClick={handleContactProperty}>
              Contact Property
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
