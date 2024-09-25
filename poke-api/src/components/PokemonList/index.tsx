import React, { useEffect, useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";


const PokemonList = () => {

    // pokemons
    const {pokemons} = usePoke();

    // GET
    const {loadPokemons} = usePoke();

    useEffect(() => {
        loadPokemons()

    }, []);

    return (
        <div>
            {pokemons.length === 0 ? (<p>Carregando...</p>) : (
                pokemons.map((pokemon) => (
                    <div className="pokemon-card" key={pokemon.url}>
                        <h2>{pokemon.name}</h2>
                    </div>
                ))
            )}
        </div>
    )
};

export default PokemonList;