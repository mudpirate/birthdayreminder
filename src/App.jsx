import { useState } from "react";
import React from "react";
import "./App.css";
import List from "./List";
import Data from "./Data";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <div className="birthday flex justify-center items-center min-h-screen bg-amber-200">
        <div className="card bg-amber-100 rounded-lg shadow-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            {people.length} birth today
          </h2>
          <List people={people} />
          <button
            className="btn mt-6 w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded transition-colors"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
