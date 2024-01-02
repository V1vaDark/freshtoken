import React from "react";
import TableTr from "./TableTr";
import { useRouter } from "next/router";

export default function Table(props) {
  const router = useRouter();
  const isOnNewPage = router.pathname === "/new";

  return (
    <div className="overflow-x-auto w-full mt-5 pb-5">
      <table className="w-full table" data-theme="dark">
        <thead>
          <tr>
            <th data-theme="dark" className={`rounded-top-left`}></th>
            <th data-theme="dark">Name</th>
            <th data-theme="dark">Network</th>
            <th data-theme="dark">{isOnNewPage ? "Listed Ago" : "Launch Date"}</th>
            <th data-theme="dark" className={`rounded-top-right`}>Links</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.slice(0, 10).map((coin) => (
            <TableTr coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>

      <style jsx>{`
        table {
          background-color: rgba(255, 0, 0, 0);
        }

        .rounded-top-left {
          border-top-left-radius: 20px;
        }

        .rounded-top-right {
          border-top-right-radius: 20px;
        }

        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
}
