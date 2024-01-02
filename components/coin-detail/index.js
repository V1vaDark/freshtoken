import CoinHero from "./coin-hero";
import CoinInfo from "./coin-info";
import CoinChart from "./coin-chart";

export default function CoinDetail(props) {

  return (
    <div className="middle p-5">

      <div className="md:flex lg:flex mb-5">
        <CoinHero details={props.details} />
        <CoinInfo details={props.details} />
      </div>

      <CoinChart details={props.details} />

  </div>
);
}