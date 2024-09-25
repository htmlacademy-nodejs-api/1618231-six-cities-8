import { IUser } from '../types/entities.types.js';
import {
  COLOGNE_COORDINATES,
  AMSTERDAM_COORDINATES,
  BRUSSELS_COORDINATES,
  DUSSELDORF_COORDINATES,
  HAMBURG_COORDINATES,
  PARIS_COORDINATES,
  Cities
} from '../types/constans.js';

export const generateRandomValue = (min: number, max: number, numAfterDigit = 0): number => parseFloat((Math.random() * (max - min) + min).toFixed(numAfterDigit));

export const getRandomItems = <T>(items: T[]): T[] => {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
};

export const getRandomItem = <T>(items: T[]): T => items[generateRandomValue(0, items.length - 1)];

export const getUserRow = (user: IUser): string => {
  const userRow: string[] = [];
  Object.values(user).forEach((item) => userRow.push(item));
  return userRow.join(';');
};

export const getLocationRow = (city: string) => {
  const locationRow: number[] = [];
  if (city.toLowerCase() === Cities.Paris.toLowerCase()) {
    const location = getRandomItem(PARIS_COORDINATES);
    Object.values(location).forEach((item) => locationRow.push(item));
  }

  if (city.toLowerCase() === Cities.Cologne.toLowerCase()) {
    const location = getRandomItem(COLOGNE_COORDINATES);
    Object.values(location).forEach((item) => locationRow.push(item));
  }

  if (city.toLowerCase() === Cities.Brussel.toLowerCase()) {
    const location = getRandomItem(BRUSSELS_COORDINATES);
    Object.values(location).forEach((item) => locationRow.push(item));
  }

  if (city.toLowerCase() === Cities.Amsterdam.toLowerCase()) {
    const location = getRandomItem(AMSTERDAM_COORDINATES);
    Object.values(location).forEach((item) => locationRow.push(item));
  }

  if (city.toLowerCase() === Cities.Hamburg.toLowerCase()) {
    const location = getRandomItem(HAMBURG_COORDINATES);
    Object.values(location).forEach((item) => locationRow.push(item));
  }

  if (city.toLowerCase() === Cities.Dusseldorf.toLowerCase()) {
    const location = getRandomItem(DUSSELDORF_COORDINATES);
    Object.values(location).forEach((item) => locationRow.push(item));
  }
  return locationRow.join(';');
};

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}
