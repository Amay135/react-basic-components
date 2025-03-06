import React from "react";
import PokemonCard from "./PokemonCard.jsx";
import NavBar from "./NavBar.jsx";
import { pokemonList } from "./data.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="container my-4">
        <h1>Pokedex</h1>
        <div className="row">
          {pokemonList.map(pokemon => (
            <div className="col" key={pokemon.index}>
              <PokemonCard data={pokemon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}