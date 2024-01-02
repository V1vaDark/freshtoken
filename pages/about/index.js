import React from "react";

export default function AboutUs() {
  return (
    <div className="middle p-5">
      <p style={{ color: "white" }} className="text-3xl mt-5">
        Why Fresh Token?
      </p>

      <span style={{ color: "#758199" }} className="text-xl description-text">
      <div style={{ marginBottom: "20px" }} />
        At Fresh Token, we believe in fostering innovation and driving positive change in the rapidly evolving world of cryptocurrency. Our platform is not just another listing service; it's a dynamic ecosystem designed to empower promising projects and connect them with a global audience of discerning investors.
        <div style={{ marginBottom: "35px" }} />
        <a
            style={{ color: "#ebebeb" }}
        >
            What Sets Us Apart:
        </a>
        <div style={{ marginBottom: "35px" }} />
        Transparency: We prioritize transparency in every aspect of our platform. From project evaluations to token metrics, we provide comprehensive and accurate information, enabling users to make informed investment decisions.
        <div style={{ marginBottom: "20px" }} />
        Community-Centric Approach: Fresh Token thrives on community engagement. We understand the significance of a strong and supportive community in the success of any project. Our platform encourages open communication, feedback, and collaboration.
        <div style={{ marginBottom: "20px" }} />
        Innovation Recognition: We are committed to recognizing and promoting innovative projects. Fresh Token is a launchpad for groundbreaking ideas, aiming to highlight and support ventures that push the boundaries of what's possible in the crypto space.
        <div style={{ marginBottom: "20px" }} />
        User-Friendly Interface: Navigating the crypto landscape can be daunting, especially for newcomers. Our user-friendly interface is designed to simplify the process, making it accessible to both experienced traders and those new to the world of digital assets.
      </span>
      <div style={{ marginBottom: "40px" }} />
      <p style={{ color: "white" }} className="text-3xl mt-8">
        What is Fresh Token's Utilities?
      </p>

      <span style={{ color: "#758199" }} className="text-xl  mt-5 description-text">
        <div style={{ marginBottom: "20px" }} />
          At Fresh Token, we are committed to providing a comprehensive and innovative platform for the cryptocurrency community. Our utilities extend beyond traditional token listings, aiming to create an ecosystem that empowers users and projects alike.
          <div style={{ marginBottom: "35px" }} />
          <a
              style={{ color: "#ebebeb" }}
          >
              Utilities:
          </a>
          <div style={{ marginBottom: "35px" }} />
          Cutting-Edge Token Listings:
          Fresh Token goes beyond the basics, offering a cutting-edge platform for the listing of diverse and promising cryptocurrencies. Our thorough vetting process ensures that only quality projects find their place on our platform, fostering a secure and vibrant environment for investors.
          <div style={{ marginBottom: "20px" }} />
          Community Engagement:
          Fresh Token believes in the strength of community collaboration. Our platform facilitates meaningful interactions between project teams and users, fostering a sense of belonging and shared success within the cryptocurrency community.
          <div style={{ marginBottom: "20px" }} />
          Decentralized Finance (DeFi) Integration:
          Fresh Token is at the forefront of the decentralized finance movement. We actively support and integrate with various DeFi projects, providing our users with access to the latest developments and opportunities within the rapidly evolving DeFi space.
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