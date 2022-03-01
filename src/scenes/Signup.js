import { useState } from "react";
import bcrypt from "bcryptjs";

const salt = "$2b$10$Ak0P/Qh2F6Z8WGg8DAHgoe";

export default function Signup({ setToken, setIsUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(password, salt);
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password: hashedPassword }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.token))
      .catch(alert);
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Signup" />
      </form>
      <br />
      <button onClick={() => setIsUser(true)}>Login</button>
    </>
  );
}
