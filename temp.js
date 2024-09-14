import { readFileSync } from 'node:fs';
import {resolve} from 'node:path';

const filePath = 'mocks/mock-data.tsv';

const rowData = readFileSync(resolve(filePath), {encoding: 'utf-8'});

const aaa = rowData.split('\n');

const ddd = aaa[0].split('\t');


console.log(ddd);
