import React from "react";
// import Data from "./data"
import List from "./List";

const App = function () {
  return (
    <main>
      <section className="container">
        <h3>0 Birthdays today</h3>
        <List />
        <button
          type="button"
          onClick={() => {
            console.log("hello world");
          }}
        >
          Clear tasks
        </button>
      </section>
    </main>
  );
};

export default App;
