import React from "react";

export default function PartnerPage() {
  return (
    <div className="middle p-5">
      <p style={{ color: "white" }} className="text-3xl mt-5">
        Fresh Token's partner platforms:
      </p>

      <span style={{ color: "#758199" }} className="text-xl description-text">
      <div style={{ marginBottom: "20px" }} />
        Well...
        <div style={{ marginBottom: "20px" }} />
        Unlike the other plaforms, we don't have any partners.
        <div style={{ marginBottom: "35px" }} />
        <a
            style={{ color: "#ebebeb" }}
        >
            Because of we have just appeared these days.
        </a>
        <div style={{ marginBottom: "35px" }} />
        But we can change it!
        <div style={{ marginBottom: "20px" }} />
        If you have a crypto platform like ours, we can be partners!
        <div style={{ marginBottom: "20px" }} />
        To discuss about details and more, you can contact us via {" "}
            <a
              href="https://t.me/freshtokensupport"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              Telegram
            </a>
        <div style={{ marginBottom: "20px" }} />
        We are looking for platforms to work together and become partners!
        <div style={{ marginBottom: "20px" }} />
        If we will be together, we will be stronger.
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