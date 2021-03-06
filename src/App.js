/* eslint-disable */
import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = function () {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear Tasks</button>
      </section>
    </main>
  );
};

export default App;
