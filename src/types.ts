export interface GalleryImage {
  id: string;
  link: string;
  title: string;
  description: string | null;
  images?: ImageData[] | null;
}

export interface ImageData {
  id: string;
  link: string;
  title: string;
  description: string | null;
  ups: number;
  downs: number;
  score: number;
}
