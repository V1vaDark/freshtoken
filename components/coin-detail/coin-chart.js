import React from "react";

export default function CoinChart(props) {
  const { network, contactAddress } = props.details;

  const getIframeSrc = () => {
    if (network === "Binance Smart Chain (BSC)") {
      return `https://dexscreener.com/bsc/${contactAddress}?embed=1&theme=dark&info=0`;
    } else if (network === "Ethereum (ETH)") {
      return `https://dexscreener.com/ethereum/${contactAddress}?embed=1&theme=dark&info=0`;
    } else if (network === "Solana (SOL)") {
      return `https://dexscreener.com/solana/${contactAddress}?embed=1&theme=dark&info=0`;
    } else if (network === "Arbitrum (ETH)") {
      return `https://dexscreener.com/arbitrum/${contactAddress}?embed=1&theme=dark&info=0`;
    } else if (network === "Avalanche (AVAX)") {
      return `https://dexscreener.com/avalanche/${contactAddress}?embed=1&theme=dark&info=0`;
    }
  };

  const embedCode = `
    <style>
      #dexscreener-embed {
        position: relative;
        width: 100%;
        padding-bottom: 125%;
      }

      @media(min-width:1400px) {
        #dexscreener-embed {
          padding-bottom: 65%;
        }
      }

      #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
      }
    </style>
    <div id="dexscreener-embed">
      <iframe src="${getIframeSrc()}"></iframe>
    </div>
  `;

  return (
    <div className="mt-8">
      <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
}