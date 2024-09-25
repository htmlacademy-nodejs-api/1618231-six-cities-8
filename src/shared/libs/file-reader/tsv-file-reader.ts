import EventEmitter from 'node:events';

import { IFileReader } from './file-reader.interface.js';
import { IOffer, IUser, ILocation } from '../../types/entities.types.js';
import { createReadStream } from 'node:fs';

export class TVSFileReader extends EventEmitter implements IFileReader {

  private CHUNK_SIZE = 16384;

  constructor(
    private readonly fileName: string
  ) {
    super();
  }

  private parseLineToOffer(row: string): IOffer {
    const [
      title,
      description,
      publDate,
      city,
      previewImage,
      images,
      isPremium,
      isFavorite,
      rating,
      hostType,
      rooms,
      quests,
      price,
      features,
      author,
      comments,
      location
    ] = row.split('\t');

    return {
      title,
      description,
      postDate: new Date(publDate),
      city,
      previewImage,
      images: images.split(';'),
      isPremium: isPremium === 'true',
      isFavorite: isFavorite === 'true',
      rating: parseInt(rating, 10),
      hostType,
      bedrooms: parseInt(rooms, 10),
      quests: parseInt(quests, 10),
      price: parseInt(price, 10),
      features: features.split(';'),
      author: this.parseUser(author),
      comments: parseInt(comments, 10),
      location: this.parseLocation(location)
    };
  }

  private parseUser(author: string): IUser {
    console.log(author);

    const [name, email, avatar, password, userType] = author.split(';');
    return { name, email, avatar, password, userType: userType === 'normal' ? 'normal' : 'pro' };
  }

  private parseLocation(location: string): ILocation {
    const [latitude, longitude] = location.split(';');
    return {
      latitude,
      longitude,
    };
  }

  public async read(): Promise<void> {
    const readStream = createReadStream(this.fileName, {
      highWaterMark: this.CHUNK_SIZE,
      encoding: 'utf-8',
    });

    let remainingData = '';
    let nextLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of readStream) {
      remainingData += chunk.toString();

      while ((nextLinePosition = remainingData.indexOf('\n')) >= 0) {
        const completeRow = remainingData.slice(0, nextLinePosition + 1);
        remainingData = remainingData.slice(++nextLinePosition);
        importedRowCount++;

        const parsedOffer = this.parseLineToOffer(completeRow);
        this.emit('line', parsedOffer);
      }
    }
    this.emit('end', importedRowCount);
  }
}
