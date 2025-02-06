import { useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <UsersList />
      </div>
    </>
  );
}

export default App;
