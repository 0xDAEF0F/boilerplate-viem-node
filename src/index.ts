import * as dotenv from 'dotenv';
dotenv.config();

import { publicClient } from './provider';

async function main() {
  const latestBlock = await publicClient.getBlockNumber();
  console.log(`latest block: ${latestBlock}`);
}

main();
