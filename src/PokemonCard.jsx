export default function PokemonCard({ index, name, children}) {
    const url = 'https://www.pokemon.com/static-assets/'
        + 'content-assets/cms2/img/pokedex/detail/'
        + `${index.padStart(3, '0')}.png`

    const pokedexLink = `https://www.pokemon.com/us/pokedex/${name.toLowerCase()}`
    return (
        <div className="card mb-4" style={{width: "12rem",}}>
            <img src={url} className="card-img-top" style={{backgroundColor :'silver'}} />
            <div className="card-body">
                <h5 className="card-title">Pokemon {name}</h5>
                <p className="card-text">{children}.</p>
                <a href={pokedexLink} className="btn btn-primary">Lihat Selengkapnya...</a>
            </div>
        </div>
    )
}