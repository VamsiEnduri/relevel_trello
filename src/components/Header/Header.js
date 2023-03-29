import React from "react";
import logo from "../../assets/logo.jpg";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
function Header(props) {
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="" />
        <h2>Relevel Trello</h2>
      </div>
      <div className="header-right">
        <span>
          <FaSearch />
        </span>
        <input type="text" value={props.input} onChange={props.searchHandler} />
        <span onClick={props.close}>
          <AiOutlineClose />
        </span>
      </div>
    </div>
  );
}

export default Header;
