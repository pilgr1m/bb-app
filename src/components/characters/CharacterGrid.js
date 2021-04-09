import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((i) => {
        return (
          <CharacterItem key={i.char_id} item={i}>
            {" "}
            {i.name}{" "}
          </CharacterItem>
        );
      })}
    </section>
  );
};

export default CharacterGrid;
