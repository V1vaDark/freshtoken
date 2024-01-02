import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import Footerinfo from "../footer/footerinfo";
import Footer from "../footer/footer";
import SearchBox from "../navbar/search";
import Banner from "../navbar/banner";
import NavbarMobile from "../navbar/mobile";

export default function Layout(props) {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 935);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const showSearchBox = !["/signup", "/submit"].includes(router.pathname);

    return (
        <main className="bg-darktwo h[100%]">
            <Navbar />
            <Banner />
            {isMobile && <NavbarMobile />}
            {showSearchBox && <SearchBox />}
            {props.children}
            <Footerinfo />
            <Footer />
        </main>
    );
}