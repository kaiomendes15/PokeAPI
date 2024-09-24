import React from "react";
import { usePoke } from "../../contexts/pokeProvider";
import './header.css'
import logoPokemon from "../../images/pngegg.png"




const Header = () => {

    const {count} = usePoke();

    return (
        <div className="header">
            <img src={logoPokemon} alt="logo"/>
            <p>Conheça todos os {count} Pokemons</p>
        </div>
    );
};

export default Header