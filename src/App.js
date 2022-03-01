import { useState } from "react";
import SignUp from "./scenes/Signup";
import Login from "./scenes/Login";
import UserList from "./scenes/Userslist";

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();

  return (
    <section>
      {!token ? (
        isUser ? (
          <Login setToken={setToken} setIsUser={setIsUser} />
        ) : (
          <SignUp setToken={setToken} setIsUser={setIsUser} />
        )
      ) : (
        <UserList token={token} />
      )}
    </section>
  );
}

export default App;
