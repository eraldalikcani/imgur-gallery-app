import { GalleryImage } from "../types";
import {
  GalleryAction,
  SET_GALLERY,
  SET_SECTION,
  SET_VIRAL,
  SET_WINDOW,
  SET_SORT,
  SET_PAGE,
  SELECT_IMAGE,
  SET_TOTAL_PAGES,
} from "./actions";

export interface GalleryState {
  section: string;
  showViral: boolean;
  window: string;
  sort: string;
  page: number;
  gallery: GalleryImage[];
  image: GalleryImage | null;
  totalPages: number;
}

const initialState: GalleryState = {
  section: "hot",
  showViral: true,
  window: "day",
  sort: "viral",
  page: 1,
  gallery: [],
  image: null,
  totalPages: 0,
};

const galleryReducer = (
  state = initialState,
  action: GalleryAction
): GalleryState => {
  switch (action.type) {
    case SET_GALLERY:
      return {
        ...state,
        gallery: action.payload,
      };
    case SET_SECTION:
      return {
        ...state,
        section: action.payload,
      };
    case SET_VIRAL:
      return {
        ...state,
        showViral: action.payload,
      };
    case SET_WINDOW:
      return {
        ...state,
        window: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SELECT_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};

export default galleryReducer;
