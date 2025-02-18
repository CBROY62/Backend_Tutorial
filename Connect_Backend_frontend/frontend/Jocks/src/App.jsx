import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jocks, setJocks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jocks")
      .then((response) => {
        setJocks(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1> Create New Jocks </h1>
      <p>JOCKS: {jocks.length}</p>
      {jocks.map((jocks, index) => (
        <div key={jocks.id}>
          <h3>{jocks.title}</h3>
          <p>{jocks.containt}</p>
        </div>
      ))}
    </>
  );
}

export default App;
