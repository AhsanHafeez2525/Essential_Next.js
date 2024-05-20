import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Custom from "../custom.module.css";

const Login = () => {
  return (
    <div>
      <h1>Welcome to login page</h1>
      <h2 className={Custom.main}>you reach on</h2>
      <div>
        <IoSearchOutline size={20} />
        <input type="text" />
      </div>
    </div>
  );
};

export default Login;
