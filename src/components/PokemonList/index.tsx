
import React, { useEffect, useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";
import InteractButton from "../InteractButton";
import BackgroundColorSetter from "../BackgroundColorSetter";
import '../PokemonList/interactButton.css'
import '../PokemonList/pokecard.css'
import '../SearchBar/searchbar.css'
import Spinner from 'react-bootstrap/Spinner';
import "../../index.css"
import SearchBar from "../SearchBar";



const PokemonList = () => {
    // Estados e funções do contexto
    const { pokemons, loadPokemons, searchPokemon, fetchedPokemon, sprite } = usePoke();

    // Estados locais
    const [maxPokemon, setMaxPokemon] = useState(21);
    const [minPokemon, setMinPokemon] = useState(1);
    const [query, setQuery] = useState("");

    // Efeito para carregar Pokémon ou buscar Pokémon específico
    useEffect(() => {
        console.clear();
        console.log("minPokemon: " + minPokemon);
        console.log("maxPokemon: " + maxPokemon);

        if (query) {
            searchPokemon(query);
        } else {
            loadPokemons(minPokemon, maxPokemon);
        }
    }, [query, minPokemon, maxPokemon]);

    // Pokémon exibidos (busca ou lista completa)
    const displayedPokemons = query ? fetchedPokemon : pokemons;

    // Filtra Pokémon com base na query (se necessário)
    const filteredPokemons = displayedPokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(query.toLowerCase());
    });

    // Funções de paginação (não alteradas)
    const handleNext = () => {
        if (maxPokemon === 1026) {
            setMaxPokemon(1026);
            setMinPokemon(1021);
        } else if (maxPokemon === 1021) {
            setMaxPokemon((prevMax) => prevMax + 5);
            setMinPokemon((prevMin) => prevMin + 20);
        } else {
            setMaxPokemon((prevMax) => prevMax + 20);
            setMinPokemon((prevMin) => prevMin + 20);
        }
    };

    const handlePrevious = () => {
        if (minPokemon <= 20) {
            setMinPokemon(minPokemon);
            setMaxPokemon(maxPokemon);
        } else if (maxPokemon === 1026) {
            setMaxPokemon((prevMax) => prevMax - 5);
            setMinPokemon((prevMin) => prevMin - 20);
        } else {
            setMaxPokemon((prevMax) => prevMax - 20);
            setMinPokemon((prevMin) => prevMin - 20);
        }
    };

    // Funções de renderização (não alteradas)
    const showType = (types: PokemonData["types"]) => {
        if (types[1]) {
            return (
                <p className="type-text">
                    <span>{types[0].type.name}</span> | {types[1].type.name}
                </p>
            );
        } else {
            return (
                <p className="type-text">
                    <span>{types[0].type.name}</span>
                </p>
            );
        }
    };

    const adaptName = (types: PokemonData["types"], children: React.ReactNode) => {
        if (
            types[0].type.name === "dark" ||
            types[0].type.name === "ghost" ||
            types[0].type.name === "rock" ||
            types[0].type.name === "psychic" ||
            types[0].type.name === "dragon"
        ) {
            return <h2 className="dark-background-names">{children}</h2>;
        } else {
            return <h2 className="light-background-names">{children}</h2>;
        }
    };

    const showID = (id: string) => {
        if (id >= "1" && id <= "9") {
            return <p className="id">{"000" + id}</p>;
        } else if (id >= "10" && id <= "99") {
            return <p className="id">{"00" + id}</p>;
        } else if (id >= "100" && id <= "999") {
            return <p className="id">{"0" + id}</p>;
        } else {
            return <p className="id">{id}</p>;
        }
    };

    const changeSprite = (pokemon: PokemonData) => {
        if (sprite === 1) {
            return (
                <img
                    className="pokemon-img normalImg"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            );
        } else {
            return (
                <img
                    className="pokemon-img pixelImg"
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt={pokemon.name}
                />
            );
        }
    };

    return (
        <div className="tela">
            {/* Componente SearchBar */}
            <SearchBar
                value={query}
                onChange={(query) => setQuery(query)}
                onClick={() => searchPokemon(query)}
            />

            {/* Botões de interação */}
            <div className="interact-buttons">
                <InteractButton className="buttonPrevious" onClick={handlePrevious}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-caret-left-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </InteractButton>
                <p>{maxPokemon - 1} of 1025 Pokemons!</p>
                <InteractButton className="buttonNext" onClick={handleNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </InteractButton>
            </div>

            {/* Lista de Pokémon */}
            <div className="pokemon-list">
                {filteredPokemons.length === 0 ? (
                    <Spinner animation="border" variant="warning" className="infos" />
                ) : (
                    filteredPokemons.map((pokemon) => (
                        <BackgroundColorSetter types={pokemon.types} key={pokemon.id}>
                            <div className="infos">
                                {showID(pokemon.id)}
                                {changeSprite(pokemon)}
                                {adaptName(pokemon.types, pokemon.name)}
                                {showType(pokemon.types)}
                            </div>
                        </BackgroundColorSetter>
                    ))
                )}
            </div>

            {/* Botões de interação (repetidos no final) */}
            <div className="interact-buttons">
                <InteractButton className="buttonPrevious" onClick={handlePrevious}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-caret-left-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </InteractButton>
                <p>{maxPokemon - 1} of 1025 Pokemons!</p>
                <InteractButton className="buttonNext" onClick={handleNext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        className="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </InteractButton>
            </div>
        </div>
    );
};

export default PokemonList;