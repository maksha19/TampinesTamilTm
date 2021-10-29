import React from "react";
import logo from "./logo.svg";

import tm_logo from "./tm_logo.jpeg";

import "./App.css";
import { Card } from "react-bootstrap";

const cardList = () => {
  return [["#004165", "#F2DF74"]].map((variant, idx) => (
    <Card
      key={idx}
      style={{ width: "18rem", backgroundColor: variant[0], color: variant[1] }}
      className="mb-2"
    >
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Body>
        <Card.Img
          style={{ borderRadius: 10 }}
          variant="top"
          src={process.env.PUBLIC_URL + "/tm_logo.jpeg"}
        />
        <Card.Title> </Card.Title>
        <Card.Title style={{ fontSize: 24 }}>
          Where Leaders Are Connect
        </Card.Title>
        {/* <Card.Text>
          We provided a Service to help you connect always to your friends.
        </Card.Text> */}
      </Card.Body>
    </Card>
  ));
};

function App() {
  return (
    <div className="App">
      <body className="App-body">
        {cardList()}
        {/* <img src={tm_logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </body>
    </div>
  );
}

export default App;
