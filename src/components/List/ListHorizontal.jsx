import React from "react";

const ListHorizontal = ({ isIncome, price, service, date, time }) => {
  return (
    <div className="w-full border py-2 px-6 rounded-lg flex justify-between items-center">
      <div>
        <div
          className={`${isIncome ? 'text-green-500' : 'text-red-500'}`}
        >
          <span>{isIncome ? "+" : "-"}</span>
          <span> Rp.{price}</span>
        </div>
        <div className="text-slate-300 text-xs gap-3 flex mt-2">
          <span>{date}</span>
          <span>{time} wib</span>
        </div>
      </div>
      <div className="text-slate-500">{service}</div>
    </div>
  );
};

export default ListHorizontal;
