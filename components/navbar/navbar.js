import React, { useState, useRef, useEffect } from "react";
import { getSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

export default function Navbar() {
  const [isUserImageClicked, setIsUserImageClicked] = useState(false);
  const [session, setSession] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      setSession(session);
    });
  }, []);

  function logoutHandler() {
    signOut();
  }

  const openModal = () => {
    setIsUserImageClicked(true);
    setIsModalOpen(true);
  };

  const router = useRouter();

  const submitCoinHandle = () => {
    router.replace("/submit");
  };

  const closeModal = () => {
    setIsUserImageClicked(false);
    setIsModalOpen(false);
  };

  const modalRef = useRef();


  const imgRef = useRef();

  const handleOutsideClick = (e) => {
    const isUserImageClicked =
      e.target.tagName === "IMG" && e.target.getAttribute("src") === "/dummy-images/user.png";
  
    if (modalRef.current && !modalRef.current.contains(e.target) && !isUserImageClicked) {
      closeModal();
    }
  };
  

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-darkzero">
        <div className="navbar text-white" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="navbar-start" style={{ justifyContent: 'flex-start' }}>
            <Link
              href="/"
              className="btn btn-ghost normal-case text-xl text-white"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/favicon.ico"
                alt="FreshToken Logo"
                style={{ height: "44px", width: "44px", maxWidth: "100%" }}
              />
              <img
                src="/banner.png"
                alt="FreshToken Banner"
                style={{ height: "52px", width: "156px", maxWidth: "100%" }}
              />
            </Link>
          </div>
            <div className="navbar-center hidden lg:flex" style={{ width: '60%', justifyContent: 'center' }}>
              <ul className="menu menu-horizontal p-0" style={{ justifyContent: 'center' }}>
                <li>
                  <Link href="/">
                    <span
                      style={{
                        color: "#758199",
                        border: "2px solid #758199",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/new">
                    <span
                      style={{
                        color: "#758199",
                        border: "2px solid #758199",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    >
                      New Listings
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/all">
                    <span
                      style={{
                        color: "#758199",
                        border: "2px solid #758199",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    >
                      All Coins
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span
                      style={{
                        color: "#758199",
                        border: "2px solid #758199",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    >
                      Contact
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/marketing">
                    <span
                      style={{
                        color: "#758199",
                        border: "2px solid #758199",
                        padding: "8px",
                        borderRadius: "10px",
                      }}
                    >
                      Marketing
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://t.me/FreshTokenEN"
                    style={{ display: "flex", alignItems: "center" }}
                    target="_blank"
                  >
                    <span
                      style={{
                        color: "#758199",
                        border: "2px solid #758199",
                        padding: "8px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src="/dummy-images/telegram.webp"
                        alt="Telegram Icon"
                        width="16"
                        height="16"
                        className="fill-current"
                        style={{ marginRight: "4px" }}
                      />
                      Telegram
                    </span>
                  </a>
                </li>
                </ul>
            </div>
            <div className="navbar-end text-white" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: 'flex-end' }}>
            <button
              onClick={submitCoinHandle}
              className="btn btn-secondary hero-gradient-bg"
              style={{
                border: "none",
                color: "white",
                transition: "background 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundSize = "100% 100%";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundSize = "200% 200%";
              }}
            >
              SUBMIT COIN
            </button>
              <img
                ref={imgRef}
                src="/dummy-images/user.png"
                width={48}
                height={48}
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={openModal}
              />
              <CSSTransition
                  in={isModalOpen && isUserImageClicked}
                  timeout={300}
                  classNames="modal"
                  unmountOnExit
                >
                <div className="absolute top-full left-0 w-full h-full flex items-center justify-center">
                  <div
                    ref={modalRef}
                    className="relative bg-white p-4 rounded"
                    style={{
                      maxWidth: "400px",
                      background: "rgba(0, 0, 0, 1)",
                      outline: "2px solid #00AA72",
                    }}
                  >
                    {session ? (
                      <span style={{ color: "#758199" }} className="mr-3">
                        Hello, {session.user.email}!
                      </span>
                    ) : (
                      <span>Hello, User!</span>
                    )}
                    {session ? (
                      <div className="mt-2">
                        <span
                          className="hover:underline hover:cursor-pointer"
                          style={{
                            color: "#00AA72",
                            fontSize: "12px",
                            border: "2px solid #00AA72",
                            padding: "4px",
                            borderRadius: "10px",
                          }}
                          onClick={logoutHandler}
                        >
                          Logout
                        </span>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <Link
                          href="/signup"
                          className="mr-3 hover:underline hover:cursor-pointer"
                          style={{
                            color: "#00AA72",
                            fontSize: "12px",
                            border: "2px solid #00AA72",
                            padding: "4px",
                            borderRadius: "10px",
                          }}
                        >
                          Register/Login
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
    </div>
  );
}