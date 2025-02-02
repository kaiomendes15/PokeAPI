import axios from "axios";
import React, { createContext, useContext, useState } from "react";

type PokeProviderProps = {
    children: React.ReactNode;
};

type PokeContextTypes = {
    loadPokemons: (startPokemon?: number, endPokemon?: number) => Promise<void>;
    searchPokemon: (query: string) => Promise<void>;
    count: number;
    pokemons: PokemonData[];
    switchSprite: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sprite: number;
    fetchedPokemon: PokemonData[];
};

const PokeContext = createContext<PokeContextTypes | undefined>(undefined);

const PokeProvider: React.FC<PokeProviderProps> = ({ children }) => {
    const [pokemons, setPokemon] = useState<PokemonData[]>([]);
    const [count] = useState(0);
    const [sprite, setSprite] = useState(0);
    const [fetchedPokemon, setFetchedPokemon] = useState<PokemonData[]>([]);

    const loadPokemons = async (startPokemon: number = 1, endPokemon: number = 21) => {
        try {
            const endpoints = Array.from({ length: endPokemon - startPokemon }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${startPokemon + i}`);
            const responses = await axios.all(endpoints.map((endpoint) => axios.get<PokemonData>(endpoint)));
            setPokemon(responses.map((response) => response.data));
        } catch (error) {
            console.error("Erro ao carregar pokémons:", error);
        }
    };

    const searchPokemon = async (query: string) => {
        try {
            console.log(typeof query)
            const response = await axios.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${query}`);
            setFetchedPokemon([response.data]);
        } catch (error) {
            console.error("Pokémon não encontrado:", error);
            setFetchedPokemon([]);
        }
    };

    const switchSprite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSprite(e.target.checked ? 1 : 0);
    };

    const value: PokeContextTypes = {
        loadPokemons,
        count,
        pokemons,
        switchSprite,
        sprite,
        searchPokemon,
        fetchedPokemon,
    };

    return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
};

const usePoke = () => {
    const context = useContext(PokeContext);
    if (!context) {
        throw new Error("usePoke must be used within a PokeProvider");
    }
    return context;
};

export { usePoke, PokeProvider };