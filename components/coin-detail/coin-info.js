import React, { useState } from "react";
import CoinDetails from "./coin-details";
import { voteCoin } from "../../lib/helper-functions/vote-coin";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

export default function CoinInfo(props) {
  const { network, day, month, year, contactAddress } = props.details;

  const router = useRouter();
  const [userEmail, setUserEmail] = useState();
  const [voteResult, setVoteResult] = useState(null);

  const getNetworkStyle = (network) => {
    if (network === "Binance Smart Chain (BSC)") {
      return { color: "#f3ba2f", image: "/dummy-images/bsc.png" };
    } else if (network === "Ethereum (ETH)") {
      return { color: "#8c8c8c", image: "/dummy-images/eth.png" };
    } else if (network === "Solana (SOL)") {
      return { color: "#9547fc", image: "/dummy-images/sol.png" };
    } else if (network === "Arbitrum (ETH)") {
      return { color: "#213147", image: "/dummy-images/arb.png" };
    } else if (network === "Avalanche (AVAX)") {
      return { color: "#e84142", image: "/dummy-images/avax.png" };
    } else {
      return { color: "rgb(132, 204, 22)", image: "" };
    }
  };

  const { color: networkColor, image: networkImage } = getNetworkStyle(network);
  
  const voteHandler = async () => {
    const session = await getSession();
    if (session) {
      setUserEmail(session.user.email);
      const result = await voteCoin(props.details.vote, props.details.id);
      setVoteResult(result);
    } else {
      router.replace("/signup");
    }
  };
  return (
    <div
      className="p-5 rounded-xl w-[60%] justify-center mobile-info"
      style={{
        backgroundColor: "#222C3F",
        border: "1px solid rgb(117, 129, 153)",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p className="text-xl mb-4">Coin Information</p>

      <div className="mb-2 flex">
        <span className="flex-1">Network:</span>
        <span className="text-right" style={{ color: networkColor }}>
          {network}
        </span>
        {networkImage && <img src={networkImage} alt={network} style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2 }} />}
      </div>
      <hr className="mb-2" style={{ color: "rgb(117, 129, 153)" }} />

      <div className="mb-2 flex">
        <span className="flex-1">Launch Date:</span>
        <span className="text-right" style={{ color: "rgb(132 204 22)" }}>
          {day} {month} {year} 📅
        </span>
      </div>
      <hr className="mb-2" style={{ color: "rgb(117, 129, 153)" }} />

      <div className="mb-2 flex contract-address">
        <span className="flex-1">Contract Address:</span>
        <span className="text-left" style={{ color: "rgb(132 204 22)" }}>
          {contactAddress}
        </span>
      </div>
      <hr className="mb-2" style={{ color: "rgb(117, 129, 153)" }} />
      <CoinDetails details={props.details} />

        <div className="hero-content text-center">
          <div className="max-w-md">
            <button className="btn btn-success mt-4" onClick={voteHandler}>
              VOTE
            </button>
            {voteResult === "success" && (
              <div role="alert" className="alert alert-success shadow-lg mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="inline-block ml-2">Voted successfully!</span>
              </div>
            )}
            {voteResult === "timestampNotReached" && (
              <div role="alert" className="alert alert-warning shadow-lg mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>You can only send one vote per hour.</span>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}