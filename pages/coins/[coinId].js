import React from "react";
import CoinDetail from "../../components/coin-detail";
import { fetchAllCoins, getCoinById } from "@/lib/helper-functions/coin-data";

export default function CoinDetailPage(props) {
  const selectedCoin = props.selectedCoin || []; // Eğer selectedCoin undefined ise boş bir dizi ata
  const coinDetails = selectedCoin.length > 0 ? selectedCoin[0] : null; // Eğer dizi içinde veri varsa ilk öğeyi al, yoksa null ata

  return (
    <div className="text-white">
      {coinDetails ? <CoinDetail details={coinDetails} /> : <p>Coin not found</p>}
    </div>
  );
}


export async function getStaticProps(context) {
  const coinId = context.params.coinId;

  const coin = await getCoinById(coinId);

  return {
    props: {
      selectedCoin: coin,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const coins = await fetchAllCoins();

  const paths = coins.map((coin) => ({ params: { coinId: coin.id } }));

  return {
    paths: paths,
    fallback: false, // veya true olarak ayarlayabilirsiniz
  };
}
