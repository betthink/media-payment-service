import React from "react";
import { toChangTime, toChangeDate } from "../../utils/toChangeFormat";

const ListHorizontal = ({ isTopup, price, service, date, time }) => {
  return (
    <div className="w-full border py-2 px-6 rounded-lg flex justify-between items-center">
      <div>
        <div
          className={`${
            isTopup == "TOPUP" ? "text-green-500" : "text-red-500"
          }`}
        >
          <span>{isTopup == "TOPUP" ? "+" : "-"}</span>
          <span> Rp.{price}</span>
        </div>
        <div className="text-slate-300 text-xs gap-3 flex mt-2">
          <span>{toChangeDate(date)}</span>
          <span>{toChangTime(time)} wib</span>
        </div>
      </div>
      <div className="text-slate-500">{service}</div>
    </div>
  );
};

export default ListHorizontal;
