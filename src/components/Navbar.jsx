import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Image/Images";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 px-24">
      <div className="flex-1">
        {/* <Logo /> */}
        <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
          <span>
            <img src={Logo} alt="Logo" />
          </span>
          <span> SIMS PPOB</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/topup"}>Top Up</Link>
          </li>
          <li>
            <Link to={"/transaction"}>Transaction</Link>
          </li>
          <li>
            <Link to="/profile">Akun</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
