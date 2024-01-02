import { fetchAllCoins } from './coin-data';

export async function fetchSortedCoins() {
  const coinsData = await fetchAllCoins();

  if (!coinsData) {
    return [];
  }

  return coinsData
    .filter((coin) => coin.hasOwnProperty('approved'))
    .sort((a, b) => b.vote - a.vote);
}