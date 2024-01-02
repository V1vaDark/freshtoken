import React from "react";
import { useRouter } from "next/router";

export default function Footerinfo() {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const isNewPage = router.pathname === "/new";
  const isAllPage = router.pathname === "/all";

  if (!isHomePage && !isNewPage && !isAllPage) {
    return null;
  }

  return (
    <div className="middle p-5 bg-darkonec">
      <p style={{ color: "white" }} className="text-3xl my-5">
        Find the best new cryptocurrency projects
      </p>

      <span className="description-text">
        Did ever you wonder where people find the best new cryptocurrency
        projects, coins and tokens like Doge and Shiba Inu? They use websites
        like freshtoken.net. Cryptocurrency projects are listed here before
        CoinMarketCap, CoinGecko and major exchanges. Find the best crypto
        moonshots on our website. However: before investing always do your own
        research (DYOR)! Listing on freshtoken.net does NOT mean we endorse the
        project, they could be scams. Be careful with your investments.
      </span>

      <p style={{ color: "white" }} className="text-3xl my-5">
        How does Fresh Token work?
      </p>

      <span className="description-text">
        New cryptocurrency projects can be listed Applying Here. Once applied,
        they instantly become visible on the New Listings Page. New listings
        require 500 votes to be officially listed in our top list. After that,
        anyone can see and vote for the project. Get your community to vote on
        your project, because votes matter! Our ranking is simple: the highest
        votes is #1 on our website. The project will get exposure with all our
        visitors! Note on voting: Unique votes only count once for the "All
        Time" page, but can count every 24 hours on the "Today" page.
      </span>

      <style jsx>{`
        .bg-darkonec {
          width: 100%;
          box-sizing: border-box;
        }

        .description-text {
          color: #758199;
          font-family: 'Poppins-Regular';
        }
      `}</style>
    </div>
  );
}