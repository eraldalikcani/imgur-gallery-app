import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setGallery, selectImage } from "../redux/actions";
import { getGallery } from "../api/imgurApi";
import "../styles/Gallery.scss";
import { GalleryImage } from "../types";
import { Link } from "react-router-dom";

const Gallery: React.FC = () => {
  const dispatch = useDispatch();
  const gallery = useSelector((state: RootState) => state.gallery);
  const selectedImage = useSelector((state: RootState) => state.image);

  const [selectedSection, setSelectedSection] = useState("hot");
  const [includeViral, setIncludeViral] = useState(true);
  const [selectedWindow, setSelectedWindow] = useState("day");
  const [selectedSort, setSelectedSort] = useState("viral");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [selectedImageDetails, setSelectedImageDetails] =
    useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await getGallery(
          selectedSection,
          includeViral,
          selectedWindow,
          selectedSort,
          currentPage
        );
        dispatch(setGallery(response.data));
        setTotalPages(response.total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGallery();
  }, [
    selectedSection,
    includeViral,
    selectedWindow,
    selectedSort,
    currentPage,
    dispatch,
  ]);

  const handleSectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSection(event.target.value);
    setCurrentPage(0);
  };

  const handleViralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeViral(event.target.checked);
    setCurrentPage(0);
  };

  const handleWindowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWindow(event.target.value);
    setCurrentPage(0);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = async (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      try {
        const response = await getGallery(
          selectedSection,
          includeViral,
          selectedWindow,
          selectedSort,
          newPage // Pass the new page to the API call
        );
        dispatch(setGallery(response.data));
        setTotalPages(response.total_pages); // Update the totalPages state
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleImageClick = (image: GalleryImage) => {
    dispatch(selectImage(image));
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Imgur Gallery</h1>
      <div className="select-container">
        <label htmlFor="section">Select Section:</label>
        <select
          id="section"
          value={selectedSection}
          onChange={handleSectionChange}
        >
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="user">User</option>
        </select>
      </div>
      <div className="checkbox-container">
        <label htmlFor="viral">
          <input
            type="checkbox"
            id="viral"
            checked={includeViral}
            onChange={handleViralChange}
          />
          Include Viral Images
        </label>
      </div>
      <div className="select-container">
        <label htmlFor="window">Select Window:</label>
        <select
          id="window"
          value={selectedWindow}
          onChange={handleWindowChange}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      <div className="select-container">
        <label htmlFor="sort">Select Sort:</label>
        <select id="sort" value={selectedSort} onChange={handleSortChange}>
          <option value="viral">Viral</option>
          <option value="top">Top</option>
          <option value="time">Time</option>
        </select>
      </div>
      <div>
        <div className="thumbnail-grid">
          {gallery.map((image) => (
            <Link to={`/image/${image.id}`} key={image.id}>
              <div
                className="thumbnail"
                key={image.id}
                onClick={() => handleImageClick(image)}
              >
                {image.images && image.images.length > 0 && (
                  <div className="thumbnail-overlay">
                    {image.images[0].link.includes(".jpg") ||
                    image.images[0].link.includes(".jpeg") ||
                    image.images[0].link.includes(".png") ||
                    image.images[0].link.includes(".gif") ? (
                      <img
                        className="thumbnail-image"
                        src={image.images[0].link}
                        alt={image.title}
                      />
                    ) : (
                      <video
                        className="thumbnail-video"
                        src={image.images[0].link}
                        autoPlay
                        muted
                        loop
                      />
                    )}
                    <div className="thumbnail-details">
                      <div className="thumbnail-title">{image.title}</div>
                      <div className="thumbnail-description">
                        {image.description}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="pagination-container">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
