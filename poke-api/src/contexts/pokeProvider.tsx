import axios, { AxiosResponse } from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

type PokeProviderProps = {
    children: React.ReactNode
};

type PokeContextTypes = {
    loadPokemons: (name?: any,startPokemon?: any, endPokemon?: any) => Promise<void>
    searchPokemon: (query: string) => Promise<void>
    count: number,
    pokemons: AxiosResponse<any, any>[],
    switchSprite: (e: any) => void,
    sprite: number,
    fetchedPokemon:AxiosResponse<any, any>[]
};

const PokeContext = createContext({} as PokeContextTypes);

const PokeProvider = ({children}: PokeProviderProps) => {

    // ? GET

    const [pokemons, setPokemon] = useState<AxiosResponse<any, any>[]>([])
    const [count, setCount] = useState(0)

    const loadPokemons = async ( startPokemon: any = 1, endPokemon: any = 20) => {
        
        try {

                const endpoints = [];
                for (let i = startPokemon; i < endPokemon; i++) {
                    // console.log(i)
                    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
                };
                // console.log(endpoints.length);
                
                // console.log(endpoints)
    
                // * axios.all is a helper method built into Axios to deal with concurrent requests. Instead of making multiple HTTP requests individually, the axios.all method allows us to make multiple HTTP requests to our endpoints altogether.
    
                const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res))
    
                // console.log(res);
            
                // const response = endpoints.map((endpoint) => await axios.get(endpoint))
    
                // setPokemon(results)

        } catch (error) {
            console.log(error);
        }
    };

    const [sprite, setSprite] = useState(0);


    function switchSprite(e: any) {
        if (e.target.checked) {
            setSprite(1)
        } else {
            setSprite(0)
        }
    }


    const [fetchedPokemon, setFetchedPokemon] = useState<AxiosResponse<any, any>[]>([])
    
    const searchPokemon = async (query: string) => {
        try {
            const param = Number(query)

            if (!isNaN(param)) {

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`);
                setFetchedPokemon([response]);
            } else {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
                setFetchedPokemon([response]);
            }
        } catch (error) {
            console.log("Pokémon não encontrado:", error);
            setFetchedPokemon([]); // Limpa a lista se a busca falhar
        }
    };

    

    

            

    


    const value: PokeContextTypes = {
        loadPokemons,
        count,
        pokemons,
        switchSprite,
        sprite,
        searchPokemon,
        fetchedPokemon
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