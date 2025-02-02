import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Container from "../components/Container";
import PokemonList from "../components/PokemonList";
import '../index.css'


const Home = () => {

    const [pokemon, setPokemon] = useState<PokeTypes | null>(null);

    // const {loadPokemons} = 

    return (
            <Container>
                <Header />
                <PokemonList />
            </Container>
    )
};

export default Home;