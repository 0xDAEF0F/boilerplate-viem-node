import * as dotenv from 'dotenv';
dotenv.config();

const rpcUrl = process.env.MAINNET_RPC_URL!;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY!;

const configObject = {
  rpcUrl,
  etherscanApiKey,
} as const;

export { configObject };
