import React from "react";

export default function JoinUs() {

  return (
    <div className="middle p-5">
      <p style={{ color: "white" }} className="text-3xl mt-5">
        Do you want to work with us?
      </p>

      <span style={{ color: "#758199" }} className="text-xl description-text">
      <div style={{ marginBottom: "20px" }} />
        Are you looking to work with someone?
        <div style={{ marginBottom: "20px" }} />
        Do you think you are an experienced in Crypto World?
        <div style={{ marginBottom: "20px" }} />
        Do you think we can work together very well?
        <div style={{ marginBottom: "20px" }} />
        Do you think you shall join us?
        <div style={{ marginBottom: "35px" }} />
        <a
            style={{ color: "#ebebeb" }}
        >
            Good news... You can join us!
        </a>
        <div style={{ marginBottom: "35px" }} />
        We are a new crypto platform. Because of we are new, we dont have very big team.
        <div style={{ marginBottom: "20px" }} />
        Thats why we are looking for new team members who are experienced and talented in Crypto World.
        <div style={{ marginBottom: "20px" }} />
        We will work, think, act and earn together!
        <div style={{ marginBottom: "20px" }} />
        If you think you can join our team, contact our team via {" "}
            <a
              href="https://t.me/freshtokensupport"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              Telegram
            </a> or {" "}
            <a
              href="mailto:contact@freshtoken.net"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#003399", textDecoration: "underline" }}
            >
              Email
            </a> and tell us about yourself.
        <div style={{ marginBottom: "20px" }} />
        We will response with in 24 hours maximum.
        <div style={{ marginBottom: "20px" }} />
        Thanks.
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