import dayjs from 'dayjs';

import { IOfferGenerator } from './offer-generator.interface.js';
import { IMockServerData } from '../../types/mock-server-data.type.js';
import { getRandomItem, generateRandomValue, getRandomItems, getLocationRow, getUserRow } from '../../helpers/index.js';
import { IUser } from '../../types/entities.types.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements IOfferGenerator {
  constructor(private readonly mockData: IMockServerData) { }

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.title);
    const description = getRandomItem<string>(this.mockData.description);
    const city = getRandomItem<string>(this.mockData.city);
    const previewImage = getRandomItem<string>(this.mockData.previewImage);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = this.mockData.isPremium;
    const isFavorite = this.mockData.isFavorite;
    const rating = getRandomItem<number>(this.mockData.rating);
    const hostType = getRandomItem<string>(this.mockData.hostType);
    const bedrooms = getRandomItem<number>(this.mockData.bedrooms);
    const quests = getRandomItem<number>(this.mockData.quests);
    const price = getRandomItem<number>(this.mockData.price);
    const features = getRandomItems<string>(this.mockData.features).join(';');
    const author = getRandomItem<IUser>(this.mockData.author);
    const authorRow = getUserRow(author);
    const comments = this.mockData.comments;
    const location = getLocationRow(city);
    const publDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY)).toISOString();

    return [title, description, publDate, city,
      previewImage, images, isPremium,
      isFavorite, rating, hostType, bedrooms,
      quests, price, features, authorRow, comments, location].join('\t');
  }
}
