import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { configObject } from './environmentConfig';

const { rpcUrl } = configObject;

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(rpcUrl),
});
