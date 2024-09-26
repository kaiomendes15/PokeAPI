import axios from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

type PokeProviderProps = {
    children: React.ReactNode
};

type PokeContextTypes = {
    loadPokemons: (number?: number) => Promise<void>;
    count: number,
    pokemons: PokeTypes[],
};

const PokeContext = createContext({} as PokeContextTypes);

const PokeProvider = ({children}: PokeProviderProps) => {

    // ? GET

    const [pokemons, setPokemon] = useState<PokeTypes[]>([])
    const [count, setCount] = useState(0)

    const loadPokemons = async (urlValue: number = 0) => {
        
        try {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${urlValue}&limit=20`)

            const data = response.data
            // console.log(data)

            // Armazenar a quantidade de pokemons
            const quantPokemon = data.count
            setCount(quantPokemon)

            // Armazenar o nome e url de cada pokemon
            const results = data.results
            console.log(results)
            setPokemon(results)

            

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
        pokemons,
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