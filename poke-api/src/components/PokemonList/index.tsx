import React, { useEffect, useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";
import InteractButton from "../InteractButton";


const PokemonList = () => {

    // pokemons
    const {pokemons, count} = usePoke();

    // GET
    const {loadPokemons} = usePoke();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const newOffset = (page - 1) * 20;
        loadPokemons(newOffset);

    }, [page, loadPokemons]);

    const handleNext = () => {
        const numPages = Math.ceil(count / 20);
        console.log(numPages)
        if (page == numPages) {
            setPage(page)
        } else {
            setPage(prevPage => prevPage + 1);
        }
    }

    const handlePrevious = () => {
        if (page == 1) {
            setPage(page)
        } else {
            setPage(prevPage => prevPage - 1)
        }
        
    }

    return (
        <div>
            <InteractButton onClick={handleNext}> passar </InteractButton>
            <InteractButton onClick={handlePrevious}> voltar </InteractButton>
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