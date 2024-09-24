import React, { useState } from "react";
import SearchBar from "../components/SearchBar";


const Home = () => {

    const [pokemon, setPokemon] = useState<PokeTypes | null>(null);

    // const {loadPokemons} = 

    return (
        <div>
            <SearchBar />
        </div>
    )
};

export default Home;