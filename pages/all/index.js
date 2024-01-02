import Table from "../../components/table/table";
import { fetchAllCoins } from "../../lib/helper-functions/coin-data";

export default function AllCoins(props) {
  console.log(props.coins);
  return (

      <div className="middle">
        <Table coins={props.coins} />
      </div>
  );
}

export async function getStaticProps() {
  const coinsData = await fetchAllCoins();

  if (!coinsData) {
    return;
  }

  const sortedCoins = coinsData
    .filter((coin) => coin.hasOwnProperty("approved"))
    .sort((a, b) => b.vote - a.vote);

  return { props: { coins: sortedCoins } };
}
