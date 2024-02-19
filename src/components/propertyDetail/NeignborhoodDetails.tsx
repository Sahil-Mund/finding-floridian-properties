import React from "react";
import { ShareIcon, StraightLine } from "../../assets/svg";
import { generateGoogleMapsUrl } from "common/helper";

interface NeignborhoodDetailsProps {
  // Add your component's props here
  data: any;
}

const NeignborhoodDetails: React.FC<NeignborhoodDetailsProps> = ({ data }) => {
  const neighborhood: any = {
    property_title: data.title,
    desc: "is situated in a thriving community that offers safety, convenience, and a vibrant atmosphere.",
    grade: "A",
    left: {
      Housing: "B-",
      "Health & Fitness": "A-",
      Commute: "A-",
      "Cost of Living": "B-",
      "Outdoor Activities": "A-",
      "Good for Families": "B+",
    },
    right: {
      "Crime & Safety": "C",
      Nightlife: "A",
      Diversity: "A",
      Weather: "A",
      Jobs: "B",
      "Public Schools": "B",
    },

    // location_url:
    //   "https://www.google.com/maps?ll=27.826383,-82.697457&z=11&t=m&hl=en&gl=IN&mapclient=embed&q=St.+Petersburg,+FL+33701+USA",
    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112910.59273912094!2d-82.7798593421373!3d27.826510408264312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ba9c0be39%3A0x8ae47e3adb68d30a!2sSt.%20Petersburg%2C%20FL%2033701%2C%20USA!5e0!3m2!1sen!2sin!4v1708005058097!5m2!1sen!2sin",
  };

  // console.log(data);

  return (
    <div className="neighborhood-container">
      <div className="grade">
        <div className="top">
          <div className="neighborhood-grade">
            <span className="grade-btn">{neighborhood.grade}</span>
            <span className="title">Neighborhood Grade</span>
          </div>
          <p>
            {data.subtitle}&nbsp;{neighborhood.desc}
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            {Object.entries(neighborhood?.left).map(([key, value]) => (
              <div key={key}>
                <span className="grade-btn-sm">{neighborhood?.left[key]}</span>
                <span className="grades-desc">{key}</span>
              </div>
            ))}
          </div>
          <StraightLine />
          <div className="right">
            {Object.entries(neighborhood.right).map(([key, value]) => (
              <div key={key}>
                <span className="grade-btn-sm">{neighborhood?.right[key]}</span>
                <span className="grades-desc">{key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src={neighborhood.iframe_src}
          width="600"
          height="450"
          loading="lazy"
          title="map"
          id="map-iframe"
        ></iframe>

        <div>
          <a
            href={generateGoogleMapsUrl(data.state)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShareIcon
              style={{ position: "absolute", top: "1%", right: "10px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeignborhoodDetails;
