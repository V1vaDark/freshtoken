import React from "react";

export default function CoinListing() {
  return (
    <div className="mt-5">
      <div className="mt-3 mb-2" align="left">
        Free Listing:
      </div>
      <div className="text-left">
        <span style={{ color: "#758199" }} className="text-xl my-5">
          If you want to choose this package, submit your current form and wait.
          It will take approximately 1-2 days for your project to be listed.
          There are no extras (social media promotion, banner promotion, vote support, etc.) in this package.
        </span>
        <div className="mt-5 mb-2" align="left">
          Express Listing:
        </div>
        <div className="text-left">
          <span style={{ color: "#758199" }} className="text-xl my-5">
            If you want to choose this package, submit your current form and contact us via{" "}
            <a
              href="https://t.me/freshtokensupport"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              Telegram
            </a>
            . INSTANT LISTING with this package.
            <br />
            <br />
            Here are some more extras of this package:
            <br />
            <br />
            • Vote Support: We will send 300 VOTES to your project when it's listed.
            <br />
            • Social Media Promotion: We will share your project on our social media communities.
            <br />
            • Banner Promotion: We will put your token as a banner on our homepage for 24 hours.
            <br />
            <br />
            Price for Express Listing is 10$. If you are willing to pay, contact us via{" "}
            <a
              href="https://t.me/freshtokensupport"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              Telegram
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}