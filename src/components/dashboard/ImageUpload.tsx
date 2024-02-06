import { ImgUploadIcon } from "assets/svg";
import React, { useRef, useState } from "react";

interface ImageUploadProps {
  // Add your component's props here
  setFormData: (src: any) => void;
  setBannerImgUrl: (src: any) => void;
  type: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  setFormData,
  type,
  setBannerImgUrl,
}) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  //   const handleSvgClick = () => {
  //     if(fileInputRef?.current){

  //         (fileInputRef?.current as HTMLInputElement).click();
  //     }
  //   };

  const uploadToAWS = async (file: any) => {
    const formData = new FormData();
    formData.append("image", file);

    // Replace 'your-api-endpoint' with the actual endpoint where you handle the upload
    const response = await fetch(
      "https://stagingappapi.ghc.health/api/progress/upload",
      {
        method: "POST",
        body: formData, // Send the file in a FormData object
      }
    );

    const data = await response.json();
    // Assuming the server responds with the URL of the uploaded image in AWS S3
    return data;
  };
  const handleChange = async (event: any) => {
    // handle file change
    // console.log(event.target?.files && event.target?.files[0]);
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the selected image to the data URL
        setSelectedImage(reader.result as string);
        if (type === "banner") {
          setFormData((prev: any) => {
            return { ...prev, banner_img: reader.result };
          });
        }

        if (type === "gallery") {
          setFormData((prev: any) => [...prev, file]);
        }
      };
      reader.readAsDataURL(file);

      setBannerImgUrl(file);
      // let's use aws
      // const data = await uploadToAWS(file);
      // console.log(data);
    }
  };
  /*
.image-upload-container{
    width: 250px;
    height: 150px;
    border: 1px solid #C2C2C2;
    background: #F8F8F8;
    display: flex;
    justify-content: center;
    .upload{
        display: flex;
        align-items: center;
        justify-content: center;
    }

   
}
*/
  return (
    <div className="image-upload-container">
      <div className="upload">
        <label htmlFor="imageUpload">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="selected-banner-img"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <ImgUploadIcon className="pointer" />
          )}
        </label>
        <input
          type="file"
          id="imageUpload"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
        {/* <ImgUploadIcon /> */}
      </div>
    </div>
  );
};

export default ImageUpload;
