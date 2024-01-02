import React from "react";
import Link from 'next/link';

export default function MarketingPage() {

  return (
    <div className="middle p-5">
      <p style={{ color: "white" }} className="text-3xl mt-5">
        Do you need marketing and promotion for your project?
      </p>

      <span style={{ color: "#758199" }} className="text-xl description-text">
        <div style={{ marginBottom: "20px" }} />
        Then you came to the right place!
        <div style={{ marginBottom: "35px" }} />
        <a style={{ color: "#ebebeb" }}>
          Our marketing services:
        </a>
        <div style={{ marginBottom: "35px" }} />
        Vote Support: We can send a HIGH NUMBER OF VOTES to your project on Fresh Token, that will move your project to the top of the home page so more people will see your project.
        <div style={{ marginBottom: "20px" }} />
        Banner Promotion: We will add your project promotion banner to the home page for 24 HOURS, and that will make our investors see your project.
        <div style={{ marginBottom: "20px" }} />
        Social Media Promotion: We will share your project on all of our SOCIAL MEDIA COMMUNITIES. We won't delete the promotion posts!
        <div style={{ marginBottom: "35px" }} />
        <span style={{ color: "#ffff" }} >
          NOTE: You can get all of the services above by Express Listing. If you want to learn more about Express Listing, take a look at{' '}
          <Link href="/submit">
            <span style={{ color: "#003399", textDecoration: "underline", cursor: "pointer" }}>
              submit
            </span>
          </Link>{' '}
          form.
        </span>
        <div style={{ marginBottom: "35px" }} />
        Softwares: We can give you software that will help your project for marketing like shilling bots, trending bots, DM bots, etc.
        <div style={{ marginBottom: "20px" }} />
        Design & Developing: We can create designs for your project like a logo, Twitter banner, welcome gif, buy gif, etc. And also, we can write codes for your project, like developing a PROFESSIONAL website, creating a Solidity smart contract for your project, etc.
        <div style={{ marginBottom: "20px" }} />
        Listing: We can list your project on BIG PLATFORMS like CoinMarketCap, CoinGecko, etc. Also, we can list your project on EXCHANGES like MEXC, CoinTiger, Huobi, Okx, etc.
        <div style={{ marginBottom: "20px" }} />
        Planning: We can create a good marketing plan for your project. We have worked with lots of projects before; we know lots about marketing.
        <div style={{ marginBottom: "20px" }} />
        Or ANY custom services that you want!
        <div style={{ marginBottom: "20px" }} />
        For these or more services, contact us via{' '}
        <a
          href="https://t.me/freshtokensupport"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#003399", textDecoration: "underline" }}
        >
          Telegram
        </a>.
      </span>
      <style jsx>{`
        .description-text {
          color: #758199;
          font-family: 'Poppins-Regular';
        }
      `}</style>
    </div>
  );
}