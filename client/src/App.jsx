import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";

function App() {
  const [username, setUsername] = useState();
  console.log("username in App:", username)
  return username ? <Home username={username}/> : <Login onSubmit={setUsername} />;
}

export default App;
