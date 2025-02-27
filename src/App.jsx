import PokemonCard from "./PokemonCard.jsx"

const pokemonList = [
  { index: "1", name: "Bulbasaur", description: "Ini deskripsi untuk Bulbasaur. Bulbasaur adalah Pokemon tipe rumput dan beracun." },
  { index: "2", name: "Ivysaur", description: "Ini deskripsi untuk Ivysaur. Ivysaur adalah Pokemon tipe rumput dan beracun." },
  { index: "3", name: "Venusaur", description: "Ini deskripsi untuk Venusaur. Venusaur adalah Pokemon tipe rumput dan beracun." },
  { index: "4", name: "Charmander", description: "Ini deskripsi untuk Charmander. Charmander adalah Pokemon tipe api." },
  { index: "5", name: "Charmeleon", description: "Ini deskripsi untuk Charmeleon. Charmeleon adalah Pokemon tipe api." },
  { index: "6", name: "Charizard", description: "Ini deskripsi untuk Charizard. Charizard adalah Pokemon tipe api dan terbang." }
];

export default function App() {
  return (
    <div className="container my-4">
      <h1>Pokedex</h1>
      <div className="row">
        {pokemonList.map(pokemon => (
          <div className="col" key={pokemon.index}>
            <PokemonCard index={pokemon.index} name={pokemon.name}>
              {pokemon.description}
            </PokemonCard>
          </div>
        ))}
      </div>
    </div>
  )
}