import React, { useState } from "react";
import { usePoke } from "../../contexts/pokeProvider";
import './header.css'
import logoPokemon from "../../images/pngegg.png"
import ToggleSwitcher from "../ToggleSwitcher";




const Header = () => {
    
    const {switchSprite} = usePoke();
    
    

    return (
        <>
            <div className="switcher-position">
                <ToggleSwitcher onChange={switchSprite}/>
            </div>
            <header>
                <h1>Pokédex</h1>
                <p>Search for a Pokémon by name or using its National Pokédex number.</p>
            </header>
        </>
    );
};

export default Header;