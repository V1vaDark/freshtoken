import React from "react";

export default function CoinSocials({ formData, setFormData }) {
  return (
    <>
      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Website link* :
        </div>
        <input
          type="text"
          value={formData.websiteURL}
          placeholder="https://coinfinder.com"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, websiteURL: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Telegram link* :
        </div>
        <input
          type="text"
          value={formData.telegramURL}
          placeholder="https://t.me/coinfinder"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, telegramURL: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Twitter link* :
        </div>
        <input
          type="text"
          value={formData.twitterURL}
          placeholder="https://twitter.com/coinfinder"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, twitterURL: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Discord link :
        </div>
        <input
          type="text"
          value={formData.discordURL}
          placeholder="https://discord.gg/coinfinder"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, discordURL: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          CoinMarketCap link :
        </div>
        <input
          type="text"
          value={formData.cmcURL}
          placeholder="https://coinmarketcap.com/currencies/frozy-inu/"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, cmcURL: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          CoinGecko link :
        </div>
        <input
          type="text"
          value={formData.cgURL}
          placeholder="https://www.coingecko.com/en/coins/bitcoin"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, cgURL: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Other :
        </div>
        <input
          type="text"
          value={formData.otherURL}
          placeholder="https://youtube.com/@ferrousus"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, otherURL: event.target.value })
          }
        />
      </div>

    </>
  );
}