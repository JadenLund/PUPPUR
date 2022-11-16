import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import PageSetup from "./components/PageSetup";
import {Segment } from "semantic-ui-react";

function App() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) resp.json().then((client) => setClient(client));
      else setClient(null);
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        {client ? (
          <div className="container">
            <Segment>
              <div className="navbar">
                <Logout setClient={setClient} />
                <NavBar client={client} />
              </div>
            </Segment>
            <Routes>
              <Route path="/about" element={<About />} />
              {/* <Route path="/favorites" element={<FavoriteDogs />} /> */}
              <Route path="/" element={<PageSetup client={client} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={<Home client={client} setClient={setClient} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
