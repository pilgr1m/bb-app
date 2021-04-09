import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const response = await axios(url);

    console.log(response.data);

    setItems(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};
export default App;
