import { useState } from "react";

function Login({onSubmit}) {
  const [username, setUsername] = useState("");
  console.log("username in componets:", username)
  return (
    <>
      <h1>Welcome</h1>
      <p>What should people call you</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("masuk")
          onSubmit(username);
        }}
      >
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
