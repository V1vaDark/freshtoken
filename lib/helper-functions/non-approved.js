import { fetchAllCoins } from './coin-data';

export async function nonApprovedCoins() {
  const coinsData = await fetchAllCoins();

  if (!coinsData) {
    return [];
  }

  return coinsData
    .filter((coin) => !coin.hasOwnProperty('approved'))
}
