import React from "react";

export default function ContactUs() {

  return (
    <div className="middle p-5">
      <p style={{ color: "white" }} className="text-3xl mt-5">
        How can I contact Fresh Token team?
      </p>

      <span style={{ color: "#758199" }} className="text-xl description-text">
      <div style={{ marginBottom: "20px" }} />
        Well, if you want to contact us, it is really simple!
        <div style={{ marginBottom: "35px" }} />
        <a
            style={{ color: "#ebebeb" }}
        >
            Platforms to contact us:
        </a>
        <div style={{ marginBottom: "35px" }} />
        Telegram: You can contact us via Telegram. Our Telegram username is: {" "}
            <a
              href="https://t.me/freshtokensupport"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              @freshtokensupport
            </a>.
        <div style={{ marginBottom: "20px" }} />
        Email: You can contact us via Email. Our Email address is: {" "}
            <a
              href="mailto:contact@freshtoken.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              contact@freshtoken.net
            </a>.
        <div style={{ marginBottom: "20px" }} />
        Twitter: You can contact us via Twitter by DM. Our Twitter username is: {" "}
            <a
              href="https://twitter.com/FreshTokenX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              @FreshTokenX
            </a>.
        <div style={{ marginBottom: "35px" }} />
        <a
            style={{ color: "#ebebeb" }}
        >
            WARNING!:
        </a>
        <div style={{ marginBottom: "35px" }} />
        You can contact us via ONLY THESE PLATFORMS AND WITH ONLY THESE ACCOUNTS.
        <div style={{ marginBottom: "20px" }} />
        Be aware of SCAMMERS, do not DM to any account that is not here.
        <div style={{ marginBottom: "20px" }} />
        If you see any fake Fresh Token accounts, please inform us about them.
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