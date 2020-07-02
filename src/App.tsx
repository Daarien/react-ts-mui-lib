import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Grid } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Grid container>
          <Button variant="contained" color="primary">
            Button
          </Button>
        </Grid>
      </header>
    </div>
  );
}

export default App;
