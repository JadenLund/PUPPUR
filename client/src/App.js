import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import FavoriteDogs from "./components/FavoriteDogs";
import About from "./components/About";
import NavBar from "./components/NavBar";
import PageSetup from "./components/PageSetup";

function App() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((client) => setClient(client));
      }
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home client={client} setClient={setClient} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<FavoriteDogs />} />
            <Route path="/breeds" element={<PageSetup client={client}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
