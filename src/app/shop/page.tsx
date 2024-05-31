import React from "react";
import { redirect } from "next/navigation";

const shop = () => {
  redirect("/Login");
  return (
    <div>
      <h1>welcome to shop page</h1>
    </div>
  );
};

export default shop;
