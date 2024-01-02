import React from "react";
import Link from "next/link";

export default function NavbarMobile() {
  const buttonStyle = {
    color: "#758199",
    border: "2px solid #758199",
    padding: "4px",
    borderRadius: "8px",
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className="fixed bottom-0 z-50 w-full bg-darkzero" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="">
        <div className="middle">
          <div className="navbar text-white">
            <div className="flex mt-2" style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <ul className="menu menu-horizontal p-0" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <li>
                  <Link href="/">
                    <span style={buttonStyle}>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/new">
                    <span style={buttonStyle}>New Listings</span>
                  </Link>
                </li>
                <li>
                  <Link href="/all">
                    <span style={buttonStyle}>All Coins</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span style={buttonStyle}>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/marketing">
                    <span style={buttonStyle}>Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/FreshTokenEN" target="_blank">
                    <span style={buttonStyle}>
                      <img src="/dummy-images/telegram.webp" alt="Telegram" style={{ marginRight: '5px', maxWidth: "16px", maxHeight: "16px" }} />
                    Telegram</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
