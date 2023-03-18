import React, { Component, useState } from "react";
import Users from "./users";

const Users = () => {
  const [users, setUsers] = useState([]);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, index) => {
            <li key={index}>{user.username}</li>;
          })}
        </ul>
      ) : (
        <p>no Users to display</p>
      )}
    </article>
  );
};

export default Users;
