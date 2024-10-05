import React, { useEffect, useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";
import InteractButton from "../InteractButton";
import BackgroundColorSetter from "../BackgroundColorSetter";
import '../PokemonList/interactButton.css'
import '../PokemonList/pokecard.css'


const PokemonList = () => {

    // pokemons
    const {pokemons, count} = usePoke();

    // GET
    const {loadPokemons} = usePoke();
    const [maxPokemon, setMaxPokemon] = useState(21);
    const [minPokemon, setMinPokemon] = useState(1);

    
    useEffect(() => {
        // const newOffset = (page - 1) * 20;
        loadPokemons(minPokemon, maxPokemon);
        // console.log(maxPokemon, minPokemon);
        // console.log(count);
        

    }, [minPokemon, maxPokemon]);

    const handleNext = () => {

        if (maxPokemon >= count) {
            setMaxPokemon(maxPokemon);
            setMinPokemon(minPokemon);
        } else {
            setMaxPokemon(prevMax => prevMax + 20);
            setMinPokemon(prevMin => prevMin + 20);
            loadPokemons(minPokemon, maxPokemon);
            // console.log(maxPokemon, minPokemon);
            
        };

    };

    const handlePrevious = () => {
        if (minPokemon == 1) {
            setMinPokemon(minPokemon);
            setMaxPokemon(maxPokemon);
        } else {
            setMaxPokemon(prevMax => prevMax - 20);
            setMinPokemon(prevMin => prevMin - 20);
            loadPokemons(minPokemon, maxPokemon);
            // console.log(maxPokemon, minPokemon);
        }
        
    }

    const showType = (types: any) => {
        if (types[1]) {
            return <p className="type-text"><span>{types[0].type.name}
            </span>      |       {types[1].type.name}</p>
        } else {
            return <p className="type-text">{types[0].type.name}</p>
        }
    }

    const adaptName = (types: any, children: React.ReactNode) => {
        if (types[0].type.name == "dark" || types[0].type.name == "ghost" || types[0].type.name == "rock" || types[0].type.name == "psychic" || types[0].type.name == "dragon") {
            return (
                <h2 className="dark-background-names">{children}</h2>
            )
        } else {
            return (
                <h2 className="light-background-names">{children}</h2>
            )
        }
    }

    

   

    return (
        <>
            <div className="interact-buttons">
                <InteractButton className="buttonPrevious" onClick={handlePrevious}> voltar </InteractButton>
                <InteractButton className="buttonNext" onClick={handleNext}> passar </InteractButton>
            </div>
            <div className="pokemon-list">
                {pokemons.length === 0 ? (<p>Carregando...</p>) : (
                    pokemons.map((pokemon) => (
                        
                        <BackgroundColorSetter types={pokemon.data.types} key={pokemon.data.id}>
                            <img className="pokemon-img" src={pokemon.data.sprites.other["official-artwork"].front_default} alt={pokemon.data.name} />
                            {adaptName(pokemon.data.types, pokemon.data.name)}
                            <h3>{pokemon.data.types.name}</h3>
                            {showType(pokemon.data.types)}
                        </BackgroundColorSetter>
                    ))
                )}
                
            </div>
        </>
    )
};

export default PokemonList;