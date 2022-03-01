import { useState } from "react";
import SignUp from "./scenes/Signup";
import Login from "./scenes/Login";

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();

  return (
    <section>
      {!token ? (
        isUser ? (
          <h1>Login</h1>
        ) : (
          ((<Login setToken={setToken} setIsUser={setIsUser} />),
          (<SignUp setToken={setToken} setIsUser={setIsUser} />))
        )
      ) : (
        <h1>User List</h1>
      )}
    </section>
  );
}

export default App;
