import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { selectImage } from "../redux/actions";
import { GalleryImage, ImageData } from "../types";

const GalleryItem: React.FC = () => {
  const selectedImage = useSelector((state: RootState) => state.image);

  if (
    !selectedImage ||
    !selectedImage.images ||
    selectedImage.images.length === 0
  ) {
    return null; // Render nothing if the selected image is not available
  }

  const image = selectedImage.images[0];
  console.log(image);

  return (
    <div className="thumbnail">
      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ flex: "1" }}>
          <div className="">
            {image.link.includes(".jpg") ||
            image.link.includes(".jpeg") ||
            image.link.includes(".png") ? (
              <img className="" src={image.link} alt={image.title} />
            ) : (
              <video className="" src={image.link} autoPlay muted loop />
            )}
          </div>
        </div>
        <div className="">
          <div className="">{image.title}</div>
          <div className="">{image.description}</div>
          <div className="">{image.ups}</div>
          <div className="">{image.downs}</div>
          <div className="">{image.score}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
