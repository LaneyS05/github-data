//import { useState } from "react";

function Display({ user }) {
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt="profile" />
      <p>
        profile
        <a href={user.html_url} target="blank">
          {" "}
          here
        </a>
      </p>
      {user.bio && <p>Bio: {user.bio}</p>}
      {user.blog && <p>Blog: {user.blog}</p>}
    </div>
  );
}
export default Display;
