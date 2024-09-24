import React from "react";
import { usePoke } from "../../contexts/pokeProvider";
import './header.css'
import logoPokemon from "../../images/pngegg.png"




const Header = () => {

    const {count} = usePoke();

    return (
        <header>
            <h1>Pokédex</h1>
            <p>Search for a Pokémon by name or using its National Pokédex number.</p>
            {/* <p className="available">There are <span>{count}</span> Pokémons available!</p> */}
        </header>
    );
};

export default Header