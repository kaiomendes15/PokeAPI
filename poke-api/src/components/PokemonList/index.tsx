import React, { useEffect, useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";
import ButtonNext from "../ButtonNext";


const PokemonList = () => {

    // pokemons
    const {pokemons} = usePoke();

    // GET
    const {loadPokemons} = usePoke();
    var num = 0

    useEffect(() => {
        loadPokemons(num)

    }, []);

    return (
        <div>
            <ButtonNext onClick={() => loadPokemons(num + 20)}> passar </ButtonNext>
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