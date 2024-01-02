import React from "react";

export default function CoinAddress({ formData, setFormData }) {
  return (
    <>
      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Network / Chain* :
        </div>
          <select
            className="select select-accent w-full bg-darkonec"
            value={formData.network}
            onChange={(event) =>
              setFormData({ ...formData, network: event.target.value })
            }
          >
            <option value="Ethereum (ETH)">Ethereum (ETH)</option>
            <option value="Binance Smart Chain (BSC)">
              Binance Smart Chain (BSC)
            </option>
            <option value="Solana (SOL)">Solana (SOL)</option>
            <option value="Arbitrum (ETH)">Arbitrum (ETH)</option>
            <option value="Avalanche (AVAX)">Avalanche (AVAX)</option>
          </select>
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Contract Address* :
        </div>
        <input
          value={formData.contactAddress}
          type="text"
          placeholder="Contract Address"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({
              ...formData,
              contactAddress: event.target.value,
            })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Description* :
        </div>
        <textarea
          value={formData.description}
          className="textarea textarea-accent w-full h-24 bg-darkzero"
          placeholder="Description"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        ></textarea>
      </div>

      <div className="mt-5" align="left">
      <div className="mt-3 mb-2" align="left">
        Launch Date* :
      </div>
      <select
        className="select select-success w-24 m-2 bg-darkonec"
        value={formData.day}
        onChange={(event) =>
          setFormData({ ...formData, day: event.target.value })
        }
      >
        <option value={null}>DAY</option>
        {Array.from({ length: 31 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <select
        className="select select-success w-28 bg-darkonec"
        value={formData.month}
        onChange={(event) =>
          setFormData({ ...formData, month: event.target.value })
        }
      >
        <option value={null}>MONTH</option>
        {[
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUGUST",
          "SEPTEMBER",
          "OCTOBER",
          "NOVEMBER",
          "DECEMBER",
        ].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="select select-success w-28 m-2 bg-darkonec"
        value={formData.year}
        onChange={(event) =>
          setFormData({ ...formData, year: event.target.value })
        }
      >
        <option value={null}>YEAR</option>
        {Array.from({ length: 10 }, (_, index) => (
          <option key={2023 - index} value={2023 - index}>
            {2023 - index}
          </option>
        ))}
      </select>
    </div>


      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Custom chart link (optional) :
        </div>
        <input
          type="text"
          value={formData.customChart}
          placeholder="https://poocoin.app/tokens/0x242f023402c0a1292dff73e2abc96c1c991ef1f3"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, customChart: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <div className="mt-3 mb-2" align="left">
          Custom swap link (optional) :
        </div>
        <input
          type="text"
          value={formData.customSwap}
          placeholder="https://pancakeswap.finance/swap?outputCurrency=0x242F023402C0A1292dFf73E2aBc96c1c991ef1F3"
          className={`input input-bordered input-accent bg-darkzero w-full`}
          onChange={(event) =>
            setFormData({ ...formData, customSwap: event.target.value })
          }
        />
      </div>
    </>
  );
}