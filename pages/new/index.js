import Table from "../../components/table/table";
import { fetchAllCoins } from "../../lib/helper-functions/coin-data";

export default function NewPage(props) {
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
    .sort((a, b) => b.approved - a.approved);

  const slicedCoins = sortedCoins.slice(0, 10);

  return { props: { coins: slicedCoins } };
}
