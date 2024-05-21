import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Custom from "../custom.module.css";
import Image from "next/image";
import VercelLogo from "../../../public/vercel.svg";

const Login = () => {
  return (
    <div>
      <h1>Welcome to login page</h1>
      <h2 className={Custom.main}>you reach on</h2>
      <div>
        <IoSearchOutline size={20} />
        <input type="text" />
        <Image src={VercelLogo} width={100} height={100} alt="vercellogo" />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz14OUetvXQ7HhiX7I4iPztp-nzIq2DArMnmvxN1L52Q&s"
          width={400}
          height={400}
          alt="coding"
        />
      </div>
    </div>
  );
};

export default Login;
