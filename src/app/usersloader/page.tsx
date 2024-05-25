"use client";
import React, { useState, useEffect } from "react";

async function fetchUserList() {
  const response = await fetch("http://dummyjson.com/users");
  const data = await response.json();
  return data.users;
}

const UsersLoader = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userList = await fetchUserList();
      setUsers(userList);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users show data with API loader</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>First name: {user.firstName}</h1>
          <h2>Email: {user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default UsersLoader;
