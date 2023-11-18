import { useState } from "react";

function Input({ setUser }) {
  const [username, setUserName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uri = encodeURI(`https://api.github.com/users/${username}`);
    const response = await fetch(uri);
    const data = await response.json();
    setUser(data);
    setUserName("");
  };
  const clear = () => {
    setUserName("");
    setUser(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input type="submit" />
        <p>username: {username}</p>
      </form>
      <button onClick={clear}>clear</button>
    </div>
  );
}
export default Input;
