import axios, { AxiosResponse } from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

type PokeProviderProps = {
    children: React.ReactNode
};

type PokeContextTypes = {
    loadPokemons: (urlValue?: number) => Promise<void>;
    count: number,
    pokemons: AxiosResponse<any, any>[],
};

const PokeContext = createContext({} as PokeContextTypes);

const PokeProvider = ({children}: PokeProviderProps) => {

    // ? GET

    const [pokemons, setPokemon] = useState<AxiosResponse<any, any>[]>([])
    const [count, setCount] = useState(0)

    const loadPokemons = async (urlValue: number = 0) => {
        
        try {

            // const responsePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${urlValue}&limit=20`)

            // const dataPokemon = responsePokemon.data
            // console.log(dataPokemon)

            // Armazenar a quantidade de pokemons
            // const quantPokemon = dataPokemon.count
            // setCount(quantPokemon)

            // Armazenar o nome e url de cada pokemon
            // const results = dataPokemon.results
            // console.log(results)

            const endpoints = [];
            for (let i = 1; i < 500; i++) {
                // console.log(i)
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            };
            // console.log(endpoints)

            // * axios.all is a helper method built into Axios to deal with concurrent requests. Instead of making multiple HTTP requests individually, the axios.all method allows us to make multiple HTTP requests to our endpoints altogether.

            const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res)
            )

            // console.log(res);
            
            

            
            
            // const response = endpoints.map((endpoint) => await axios.get(endpoint))

            // setPokemon(results)

        } catch (error) {
            console.log(error);
        };
    };
            

    


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