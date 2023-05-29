import { GalleryImage } from "../types";

export const SET_GALLERY = "SET_GALLERY";
export const SET_SECTION = "SET_SECTION";
export const SET_VIRAL = "SET_VIRAL";
export const SET_WINDOW = "SET_WINDOW";
export const SET_SORT = "SET_SORT";
export const SET_PAGE = "SET_PAGE";
export const SELECT_IMAGE = "SELECT_IMAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export interface SetGalleryAction {
  type: typeof SET_GALLERY;
  payload: GalleryImage[];
}

export interface SetSectionAction {
  type: typeof SET_SECTION;
  payload: string;
}

export interface SetViralAction {
  type: typeof SET_VIRAL;
  payload: boolean;
}

export interface SetWindowAction {
  type: typeof SET_WINDOW;
  payload: string;
}

export interface SetSortAction {
  type: typeof SET_SORT;
  payload: string;
}

export interface SetPageAction {
  type: typeof SET_PAGE;
  payload: number;
}

export interface SelectImageAction {
  type: typeof SELECT_IMAGE;
  payload: GalleryImage | null;
}

export interface SetTotalPagesAction {
  type: typeof SET_TOTAL_PAGES;
  payload: number;
}

export const setGallery = (gallery: GalleryImage[]): SetGalleryAction => ({
  type: SET_GALLERY,
  payload: gallery,
});

export const setSection = (section: string): SetSectionAction => ({
  type: SET_SECTION,
  payload: section,
});

export const setViral = (viral: boolean): SetViralAction => ({
  type: SET_VIRAL,
  payload: viral,
});

export const setWindow = (window: string): SetWindowAction => ({
  type: SET_WINDOW,
  payload: window,
});

export const setSort = (sort: string): SetSortAction => ({
  type: SET_SORT,
  payload: sort,
});

export const setPage = (page: number): SetPageAction => ({
  type: SET_PAGE,
  payload: page,
});

export const selectImage = (image: GalleryImage | null): SelectImageAction => ({
  type: SELECT_IMAGE,
  payload: image,
});

export const setTotalPages = (totalPages: number): SetTotalPagesAction => ({
  type: SET_TOTAL_PAGES,
  payload: totalPages,
});

export type GalleryAction =
  | SetGalleryAction
  | SetSectionAction
  | SetViralAction
  | SetWindowAction
  | SetSortAction
  | SetPageAction
  | SelectImageAction
  | SetTotalPagesAction;
