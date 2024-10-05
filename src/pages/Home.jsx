import React, { useState } from "react";
import Header from "../components/Header";

const Home = () => {
  const [count, setCount] = useState(0);
  console.log("home componentim render oldu");
  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <h1>Count: {count}</h1>
      <button
        className="border border-red-200 p-2"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
      <hr />
      <Header count={count <= 5 ? 0 : count} />
    </div>
  );
};

export default Home;