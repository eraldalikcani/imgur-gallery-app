import axios from "axios";
import { GalleryImage, ImageData } from "../types";

const BASE_URL = "https://api.imgur.com/3";

export const getGallery = async (
  section: string,
  showViral: boolean,
  window: string,
  sort: string,
  page: number
): Promise<{ data: GalleryImage[]; total_pages: number }> => {
  const perPage = 30; // Set the desired number of results per page

  try {
    const response = await axios.get(
      `${BASE_URL}/gallery/${section}/${window}/${sort}`,
      {
        headers: {
          Authorization: "Client-ID cabb1b8420fd97b",
        },
        params: {
          showViral: showViral ? "true" : "false",
          page: String(page), // Convert page number to string
          perPage: String(perPage), // Convert perPage value to string
        },
      }
    );

    const { data, total_pages } = response.data;

    console.log(data);
    console.log(total_pages);
    console.log(response.data);

    return {
      data,
      total_pages,
    };
  } catch (error) {
    console.error("Error retrieving gallery:", error);
    throw error; // Optionally, handle or rethrow the error as needed
  }
};
