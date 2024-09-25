import { TVSFileReader } from '../../shared/index.js';
import { Command } from './command.interfae.js';
import { IOffer } from '../../shared/types/entities.types.js';
import { getErrorMessage } from '../../shared/helpers/index.js';

export class ImportCommand implements Command {
  private onImportedOffer(offer: IOffer): void {
    console.info(offer);
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
  }

  public getName(): string {
    return '--import';
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [fileName] = parameters;
    const fileReader = new TVSFileReader(fileName.trim());

    fileReader.addListener('line', this.onImportedOffer);
    fileReader.addListener('end', this.onCompleteImport);

    try {
      fileReader.read();
    } catch (error) {
      console.error(`Can't import data from file: ${fileName}`);
      console.error(getErrorMessage(error));
    }
  }
}
