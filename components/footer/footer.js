import React from "react";

export default function Footer() {
  const onButtonClick = () => {
    fetch('brand.rar').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'brand.rar';
            alink.click();
        })
    })
  }
  return (

    <>
    <div className="bg-darkzero">
      <footer className="footer middle p-10" style={{color:"white"}}>
        <div style={{ color: "white" }}>
          <span className="footer-title" style={{ color: "white" }}>
            About Us
          </span>
          <a href="/about" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <span>About</span>
            </a>
          <a className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <span onClick={onButtonClick}>Brand & Logos</span>
            </a>
          <a href="/contact" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Contact</span>
            </a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <a href="https://twitter.com/FreshTokenX" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/dummy-images/twitter.png"
              alt="X Icon"
              width="16"
              height="16"
              className="fill-current"
            />
            <span style={{ marginLeft: '8px' }}>Twitter</span>
          </a>
          <a href="https://t.me/FreshTokenChat" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/dummy-images/telegram.webp"
              alt="Telegram Icon"
              width="16"
              height="16"
              className="fill-current"
            />
            <span style={{ marginLeft: '8px' }}>Telegram (Global Chat)</span>
          </a>
          <a href="https://t.me/freshtokenannouncement" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/dummy-images/telegram.webp"
              alt="Telegram Icon"
              width="16"
              height="16"
              className="fill-current"
            />
            <span style={{ marginLeft: '8px' }}>Telegram (Announcement)</span>
          </a>
          <a href="https://t.me/freshtokenlisting" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/dummy-images/telegram.webp"
              alt="Telegram Icon"
              width="16"
              height="16"
              className="fill-current"
            />
            <span style={{ marginLeft: '8px' }}>Telegram (Listing)</span>
          </a>
          <a href="https://linktr.ee/freshtoken1" target="_blank" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/dummy-images/linktree.png"
              alt="Linktree Icon"
              width="16"
              height="16"
              className="fill-current"
            />
            <span style={{ marginLeft: '8px' }}>Linktree</span>
          </a>
        </div>
        <div>
          <span className="footer-title">Partnership</span>
          <a href="/join" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Join Us</span>
            </a>
          <a href="/marketing" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Marketing</span>
            </a>
          <a href="/partners" className="link link-hover" style={{ display: 'flex', alignItems: 'center' }}>
            <span>Partners</span>
            </a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 bg-base-200 text-base-content border-base-300 bg-darkone">
          <div className="items-center grid-flow-col bg-opacity-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            ></svg>
            <p className="copyright-text normaltextlfg">
              Fresh Token <br />
              Copyright © 2023 Fresh Token. All Rights Reserved
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4"></div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .copyright-text {
          font-family: 'Poppins-Regular';
        }
      `}</style>
    </>
  );
}