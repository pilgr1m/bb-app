import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(true);

  const fetchItems = async () => {
    const url = `https://www.breakingbadapi.com/api/characters?name=${query}`;
    const response = await axios(url);

    setItems(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("1");
    fetchItems();
  }, []);

  useEffect(() => {
    console.log("2");
    const fetchItems = async () => {
      const url = `https://www.breakingbadapi.com/api/characters?name=${query}`;
      const response = await axios(url);

      setItems(response.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};
export default App;
