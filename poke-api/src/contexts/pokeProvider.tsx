import axios from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

type PokeProviderProps = {
    children: React.ReactNode
};

type PokeContextTypes = {
    loadPokemons: () => Promise<void>;
    count: number

};

const PokeContext = createContext({} as PokeContextTypes);

const PokeProvider = ({children}: PokeProviderProps) => {

    // GET

    const [pokemon, setPokemon] = useState<PokeTypes | null>(null)
    const [count, setCount] = useState(0)

    const loadPokemons = async () => {
        
        try {

            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")

            const data = response.data

            // Armazenar a quantidade de pokemons
            const quantPokemon = data.count
            setCount(quantPokemon)

        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        loadPokemons();
    }, []);

    const value: PokeContextTypes = {
        loadPokemons,
        count,
    };

    return (
        <PokeContext.Provider value={value}>
            {children}
        </PokeContext.Provider>
    )

    
};

const usePoke = () => {
    const context = useContext(PokeContext);

    if (!context) {
        throw new Error("usePoke must be used within a PokeProvider")
    }

    return context;
};

export { usePoke, PokeProvider}