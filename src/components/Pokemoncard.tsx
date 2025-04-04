interface pokemon {
    name: string;
    imgSrc?: string;
}

function PokemonCard({ pokemon }) {



    return (
        <div>
            {pokemon.imgSrc !== undefined ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>pas d'image</p>
            )}

            <figcaption>{pokemon.name}</figcaption>
        </div >

    )
}

export default PokemonCard;