import Image from "next/image";

export default function CoinHero(props) {
  const {
    url,
    nameInput,
    telegramURL,
    twitterURL,
    websiteURL,
    symbol,
    vote,
    cmcURL,
    cgURL,
    discordURL,
    otherURL,
    description,
  } = props.details;

  const voteFontSize = vote > 10 ? "14px" : "18px";

  return (
  <div
    className="hero rounded-xl mobile-hero"
    style={{
      backgroundColor: "#222C3F",
      border: "1px solid rgb(117, 129, 153)",
      width: "1000px",
      maxWidth: "100%",
      margin: "auto",
      marginRight: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >

    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={url}
          width={800}
          height={800}
          className="lg:max-w-sm md:max-w-sm rounded-full"
        />

        <div className="info-container">
          <div>
            <small className="underline"> Project Name </small>
            <h1 className="text-3xl font-bold">{nameInput}</h1>

            <small className="underline"> Symbol </small>
            <h1 className="text-3xl font-bold">{symbol}</h1>

            <span className="badge badge-secondary badge-sm custom-badge">
              <span className="large-vote-text" style={{ fontSize: voteFontSize }}>
                {vote} VOTES
              </span>
            </span>
          </div>

          <div className="flex flex-row align-buttons">
            <a href={`${websiteURL}`} target="_blank" passHref={true}>
              <img src="/dummy-images/web.png" width="20" className="mr-3" />
            </a>
            <a href={`${twitterURL}`} target="_blank" passHref={true}>
              <img src="/dummy-images/twitter.png" width="20" className="mr-3" />
            </a>
            <a href={`${telegramURL}`} target="_blank" passHref={true}>
              <img src="/dummy-images/telegram.webp" width="20" className="mr-3" />
            </a>
            <a
              href={`${cmcURL}`}
              target="_blank"
              passHref={true}
              style={{ pointerEvents: cmcURL ? "auto" : "none" }}
            >
              <img src="/dummy-images/cmc.webp" width="20" className="mr-3" style={{ opacity: cmcURL ? 1 : 0.5 }}/>
            </a>
            <a
              href={`${cgURL}`}
              target="_blank"
              passHref={true}
              style={{ pointerEvents: cgURL ? "auto" : "none" }}
            >
              <img src="/dummy-images/cg.png" width="20" className="mr-3" style={{ opacity: cgURL ? 1 : 0.5 }}/>
            </a>
            <a
              href={`${discordURL}`}
              target="_blank"
              passHref={true}
              style={{ pointerEvents: discordURL ? "auto" : "none" }}
            >
              <img src="/dummy-images/dc.png" width="20" className="mr-3" style={{ opacity: discordURL ? 1 : 0.5 }}/>
            </a>
            <a
              href={`${otherURL}`}
              target="_blank"
              passHref={true}
              style={{ pointerEvents: otherURL ? "auto" : "none" }}
            >
              <img src="/dummy-images/other.png" width="20" className="mr-3" style={{ opacity: otherURL ? 1 : 0.5 }}/>
            </a>
          </div>
          <p className="py-6 description-text">{description}</p>
        </div>
      </div>
      </div>

      <style jsx>{`
        .large-vote-text {
          font-size: 18px;
        }

        .info-container {
          margin-left: 20px;
        }

        .align-buttons {
          margin-top: 10px;
        }

        .custom-badge {
          width: 100px;
          height: 20px;
        }
        @media only screen and (max-width: 1200px) {
          .mobile-hero {
            width: 85%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}