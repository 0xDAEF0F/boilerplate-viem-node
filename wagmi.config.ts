/// @ts-ignore
import { defineConfig } from '@wagmi/cli';
/// @ts-ignore
import { etherscan } from '@wagmi/cli/plugins';

import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  out: 'src/abigen.ts',
  contracts: [],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: 1,
      contracts: [],
    }),
  ],
});
