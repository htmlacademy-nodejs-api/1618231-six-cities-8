import { TVSFileReader } from '../../shared/index.js';
import { Command } from './command.interfae.js';


export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [fileName] = parameters;
    const fileReader = new TVSFileReader(fileName.trim());

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file: ${fileName}`);
      console.error(`Details: ${err.message}`);
    }
  }
}
