import React from "react";
import Link from "next/link";
import { fetchSortedCoins } from "@/lib/helper-functions/fetched-coin";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, doc, getDocs, query, collection } from "firebase/firestore";

export default function TableTr(props) {
  const router = useRouter();
  const { url, nameInput, symbol, network, day, month, year, id, telegramURL, twitterURL, websiteURL, cmcURL, cgURL, discordURL, otherURL } = props.coin;

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
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleTelegramButtonClick = () => {
    window.open(telegramURL);
  };

  const handleTwitterButtonClick = () => {
    window.open(twitterURL);
  };

  const handleCMCButtonClick = () => {
    if (cmcURL) {
      window.open(cmcURL);
    }
  };

  const handleCgButtonClick = () => {
    if (cgURL) {
      window.open(cgURL);
    }
  };

  const handleDcButtonClick = () => {
    if (discordURL) {
      window.open(discordURL);
    }
  };


  const handleOtherButtonClick = () => {
    if (otherURL) {
      window.open(otherURL);
    }
  };

  const handleWebButtonClick = () => {
    window.open(websiteURL);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  }

  const [topCoins, setTopCoins] = useState([]);

  const [timeDifference, setTimeDifference] = useState("");

  const [loading, setLoading] = useState(true);

  const [voteInConsole, setVoteInConsole] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sortedCoins = await fetchSortedCoins();
        const topThreeCoins = sortedCoins.slice(0, 5);
        setTopCoins(topThreeCoins);
        setVoteInConsole(sortedCoins.find((coin) => coin.id === id)?.vote || 0);

        if (router.pathname === "/new") {
          const firestore = getFirestore();
          const coinDocRef = doc(firestore, "projects", id);
          const votersQuery = query(collection(coinDocRef, "Listing"));

          try {
            const querySnapshot = await getDocs(votersQuery);

            if (!querySnapshot.empty) {
              const listingDoc = querySnapshot.docs[0];
              const timestampValue = listingDoc.data().dateListing.toDate();
              setTimeDifference(calculateTimeDifference(timestampValue));
              setLoading(false);
            } else {
              console.log("dateListing not found");
            }
          } catch (error) {
            console.error("Firebase error:", error);
          }
        }
      } catch (error) {
        console.error("Data error:", error);
      }
    };

    fetchData();
    return () => {};
  }, [router.pathname, id]);

  function calculateTimeDifference(launchDate) {
    const currentDate = new Date();
    const difference = launchDate - currentDate;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${Math.abs(hours + 1)} hours, ${Math.abs(minutes + 1)} minutes`;
  }

  const isOnNewPage = router.pathname === "/new";

  const topCoinIndex = topCoins.findIndex((topCoin) => topCoin.id === id);

  let className;
  if (!isOnNewPage) {
    if (topCoinIndex === 0) {
      className = "purp-gradient";
    } else if (topCoinIndex === 1) {
      className = "blue-gradient";
    } else if (topCoinIndex === 2) {
      className = "red-gradient";
    } else if (topCoinIndex === 3) {
      className = "green-gradient";
    } else if (topCoinIndex === 4) {
      className = "yellow-gradient";
    } else {
      className = "tabletrr";
    }
  } else {
    className = "tabletrr";
  }

  const dynamicStyle = {
    backgroundSize: hovered ? '100% 100%' : '200% 200%',
    transition: 'background 0.5s ease',
    border: 'none',
    color: 'white',
  };

  return (
    <tr
      className={className + " text-white"}
      style={dynamicStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <th style={{ minWidth: "80px", borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}> 
        <label>
          <div className="mask mask-circle w-12 shuffledcoin-logo">
          <Link href={`/coins/${id}`}><img src={url} alt={nameInput} /></Link>
          </div>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold cursor-pointer hover:underline">
              <Link href={`/coins/${id}`}>{nameInput}</Link>
            </div>
            <div className="text-sm opacity-50">{symbol}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="mb-2 flex">
          <span className="text-right" style={{ color: networkColor, textShadow: '0px 0px 2px black' }}>
            {network}
          </span>
          {networkImage && <img src={networkImage} alt={network} style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2, marginTop: -2 }} />}
        </div>
        <span className="badge badge-secondary badge-sm" style={{ minWidth: '100px', textAlign: 'center' }}>{voteInConsole} VOTES</span>
      </td>
      <td>
        {router.pathname === "/new" ? (
          loading ? (
            <div className="font-bold">Loading...</div>
          ) : (
            <div className="font-bold">{timeDifference}</div>
          )
        ) : (
          <div className="font-bold">
            {`${day} ${month} ${year}`}
          </div>
        )}
      </td>
      <th style={{ minWidth: "80px", borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
      <button onClick={handleWebButtonClick}><img src="/dummy-images/web.png" style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2 }}></img></button>
        <button onClick={handleTwitterButtonClick}><img src="/dummy-images/twitter.png" style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2 }}></img></button>
        <button onClick={handleTelegramButtonClick}><img src="/dummy-images/telegram.webp" style={{ maxWidth: 22, maxHeight: 22 }}></img></button>
        <button onClick={handleCMCButtonClick} style={{ cursor: cmcURL ? 'pointer' : 'default' }}><img src="/dummy-images/cmc.webp" style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2, opacity: cmcURL ? 1 : 0.3 }}></img></button>
        <button onClick={handleCgButtonClick} style={{ cursor: cgURL ? 'pointer' : 'default' }}><img src="/dummy-images/cg.png" style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2, opacity: cgURL ? 1 : 0.3 }}></img></button>
        <button onClick={handleDcButtonClick} style={{ cursor: discordURL ? 'pointer' : 'default' }}><img src="/dummy-images/dc.png" style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2, opacity: discordURL ? 1 : 0.3 }}></img></button>
        <button onClick={handleOtherButtonClick} style={{ cursor: otherURL ? 'pointer' : 'default' }}><img src="/dummy-images/other.png" style={{ maxWidth: 22, maxHeight: 22, marginLeft: 2, opacity: otherURL ? 1 : 0.3 }}></img></button>
      </th>
    </tr>
  );
}