import React, { useEffect, useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";
import InteractButton from "../InteractButton";
import BackgroundColorSetter from "../BackgroundColorSetter";
import '../PokemonList/interactButton.css'
import '../PokemonList/pokecard.css'
import slider from '../../images/sliders-horizontal-thin-svgrepo-com (2).svg'
import '../SearchBar/searchbar.css'




const PokemonList = () => {

    // pokemons
    const {pokemons, count} = usePoke();

    // GET
    const {loadPokemons} = usePoke();
    const [maxPokemon, setMaxPokemon] = useState(21);
    const [minPokemon, setMinPokemon] = useState(1);
    
    const [query, setQuery] = useState("")

    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.data.name.toLowerCase().includes(query.toLowerCase())
    })
    
    useEffect(() => {
        // const newOffset = (page - 1) * 20;
        
        console.log(maxPokemon);
        console.log(minPokemon);
        
        loadPokemons(query, minPokemon, maxPokemon);
        // console.log(maxPokemon, minPokemon);
        // console.log(count);
        

    }, [minPokemon, maxPokemon]);

    // useEffect(() => {

    //     // loadPokemons("", 1, 1025)
    // }, [query])

    const handleNext = () => {

        if (maxPokemon == 1021) {
            setMaxPokemon(maxPokemon + 4);
            setMinPokemon(minPokemon + 4);
        } else {
            setMaxPokemon(prevMax => prevMax + 20);
            setMinPokemon(prevMin => prevMin + 20);    

            loadPokemons("", minPokemon, maxPokemon);
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
            loadPokemons("", minPokemon, maxPokemon);
            // console.log(maxPokemon, minPokemon);
        };
        
    };

    const showType = (types: any) => {
        if (types[1]) {
            return <p className="type-text"><span>{types[0].type.name}
            </span>      |       {types[1].type.name}</p>
        } else {
            return <p className="type-text"><span>{types[0].type.name}</span></p>
        };
    };

    const adaptName = (types: any, children: React.ReactNode) => {
        if (types[0].type.name == "dark" || types[0].type.name == "ghost" || types[0].type.name == "rock" || types[0].type.name == "psychic" || types[0].type.name == "dragon") {
            return (
                <h2 className="dark-background-names">{children}</h2>
            )
        } else {
            return (
                <h2 className="light-background-names">{children}</h2>
            );
        };
    };


    const showID = (id: string) => {
        // console.log(id);
        
        if (id >= "1" && id <= "9" ) {
            return (
                <p className="id">{"000" + id}</p>
            );
        } else if (id >= "10" && id <= "99") {
            return (
                <p className="id">{"00" + id}</p>
            );
        } else if (id >= "100" && id <= "999") {
            return (
                <p className="id">{"0" + id}</p>
            );
        } else {
            return (
                <p className="id">{id}</p>
            );
        }
    }

    
    

   

    return (
        <>
        {/* SearchBAR component */}
        <div className="search-options">
            <div className="searchbar-content">
                <button className="search-btn">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsFJREFUSEu1lU1IFGEYx//PzOxCZgkV9nGIEulj25ldEqJDCiUkFQUVu2NGHZSgoDoYdOjUqehSiEUZFJRY7oQWBeFJyCjxoLszs22ZEIThoQ+TxK91dp5azWjLnR1Q5/q+7//3/J/3ff5DWOCPFlgfWQE+X2it6KEjIOwlIJAuhEFRAp7DnnxoGK2f3BT3H6C4+OjSRfmTjQQ6kE2AmZlA2ldptHqg+9moEygDsKZkf94KK68LBD8zTxDQwLZVZ5qtH9IisnyoCIJUC+AEEXnB6PJIBaXd3bcns0EyAEpAvQ/CMWb0cwoV8Xjk7WwH/f7DCkliG4FWM+OqqUfO5QTIckgmUTAAtixObUvoLVEn67IcLiORXjBzMikI63ujzQOz7f/jQA6o9UQ4zYzrph454+YC5aDaRECVbfOFuKFddgYEw30EKrbY8if0ljduAFsC4Z0iUTsYLw09UuYIUILhEYDyjNhmEbhouwH4fKFlklf4xsyDpq4tz9Gi8A8iWgLbm28YjSMuAfmSVxgG+IsR0wpztEiNTQ2UjRLDiPS4ASiKuh0COsHcbuhaeS4HV4joPJhvGbp2yhUgqN4DcJyZ601dO+sICATUDTb4HRFSbp6polSWQuCOKVEH1xmDJgfCd4ioGsBHYuzW9cj72aryBUNBkYU2Iqxk5gZT107mHLT0hsyowDjANzklXIvHm/vT679d1hKhBiBpOgC5Mzk2XtHb+3TYsUUzi0UloYLFFjUR0b7s98BDAF0CoxKErWBEBZrYFYs9Gfr3TNa43hSsXOeFXfUr0PYwkQLGGAg9YH4NW7phmg++p+dA9Art03HOMSvJ5YnEo8G/IXP+4UxBPMIrImwC0Ac7ucMwHn+egcwZkBZSlIOFTJ4OItpoM9fEde3uvALSYj5faJXkFVQjFqmb1xblGsh5aZETZMEBPwFMyxoo3GrKbQAAAABJRU5ErkJggg=="/>
                </button>
                <input 
                type="search"
                value={query}
                placeholder="Name or number"
                onChange={(e) => setQuery(e.target.value)}
                />
            </div>
                <button className="filter-btn">
                    <img src={slider}/>
                </button>
        </div>
        {/* SearchBAR component */}

            <div className="interact-buttons">
                <InteractButton className="buttonPrevious" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </InteractButton>
                <p>{maxPokemon} of 1025 Pokemons!</p>
                <InteractButton className="buttonNext" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>  
                </InteractButton>
            </div>

            <div className="pokemon-list">
                {filteredPokemons.length === 0 ? (<p>Carregando...</p>) : (
                    filteredPokemons.map((pokemon) => (
                        
                        <BackgroundColorSetter types={pokemon.data.types} key={pokemon.data.id}>
                            <div className="infos">
                                {showID(pokemon.data.id)}
                                <img className="pokemon-img" src={pokemon.data.sprites.other["official-artwork"].front_default} alt={pokemon.data.name} />
                                {adaptName(pokemon.data.types, pokemon.data.name)}
                                {showType(pokemon.data.types)}
                            </div>
                        </BackgroundColorSetter>
                    ))
                )}
                
            </div>

            <div className="interact-buttons">
                <InteractButton className="buttonPrevious" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </InteractButton>
                <p>{maxPokemon} of 1025 Pokemons!</p>
                <InteractButton className="buttonNext" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>  
                </InteractButton>
            </div>
        </>
    )
};

export default PokemonList;