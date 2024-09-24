import { ILocation, IUser } from './entities.types.js';

export interface IMockServerData {
  title: string;
  description: string;
  postDate: Date;
  city: string;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  hostType: string;
  bedrooms: number;
  quests: number;
  price: number;
  features: string[];
  author: IUser;
  comments: number;
  location: ILocation;
}
