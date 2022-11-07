import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import FavoriteDogs from "./components/FavoriteDogs";
import About from "./components/About";
import NavBar from "./components/NavBar";
import PageSetup from "./components/PageSetup";
import CommentCard from './components/CommentCard'
function App() {
  const [client, setClient] = useState(null);
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
            <Route path="/breeds" element={<PageSetup />} />
            <Route path="/comments" element={<CommentCard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
