import { Mentor } from './mentorsInterface';

export type Post = {
  contentsImages: string[];
  thumbnails: string[];
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  views: number;
  description: string;
  minPrice: number;
  maxPrice: number;
  bidPrice: number;
  likeCount: number;
  contents: string;
  firmLink: null | string;
  keywords: string;
  auctionEndDateTime: string;
  lectureDateTime: string;
  lectureLocation: string;
  mentor: Mentor;
  base64?: string;
};
