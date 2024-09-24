import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Container from "../components/Container";


const Home = () => {

    const [pokemon, setPokemon] = useState<PokeTypes | null>(null);

    // const {loadPokemons} = 

    return (
            <Container>
                <Header />
                <SearchBar />
            </Container>
    )
};

export default Home;