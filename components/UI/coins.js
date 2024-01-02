import Image from "next/image";
import Link from "next/link";

export default function Coins(props) {
  return (
    <div
      className="flex overflow-x-scroll"
      style={{
        borderTop: "1px solid rgb(52, 211, 153)",
        borderBottom: "1px solid rgb(52, 211, 153)",
        marginTop: "-20px",
      }}
    >
      <style jsx>{`
        /* Add this style to customize the scrollbar */
        .flex {
          scrollbar-color: rgb(52, 211, 153); /* Firefox */
          scrollbar-width: thin; /* Firefox */
        }

        .flex::-webkit-scrollbar-thumb {
          background-color: rgb(52, 211, 153);
          border-radius: 6px;
        }
      `}</style>

      {props.coins.map((coin) => (
        <Link href={`/coins/${coin.id}`} key={coin.id}>
          <div className="avatar">
            <div className="w-20 mask mask-circle mt-4">
              <Image
                src={coin.url}
                width={100}
                height={100}
                alt={coin.nameInput}
                className="shuffledcoin-logo"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
