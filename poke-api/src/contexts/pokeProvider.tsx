import axios from "axios";
import React, {createContext, useContext, useEffect, useState} from "react";

type PokeProviderProps = {
    children: React.ReactNode
};

type PokeContextTypes = {
    loadPokemons: (number?: number) => Promise<void>;
    loadPokemonInfo: (name?: string) => Promise<void>;
    count: number,
    pokemons: PokeTypes[],
};

const PokeContext = createContext({} as PokeContextTypes);

const PokeProvider = ({children}: PokeProviderProps) => {

    // ? GET

    const [pokemons, setPokemon] = useState<PokeTypes[]>([])
    const [count, setCount] = useState(0)

    const loadPokemons = async (urlValue: number = 0, name: string = "") => {
        
        try {

            const responsePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${urlValue}&limit=20`)

            const dataPokemon = responsePokemon.data
            // console.log(dataPokemon)

            // Armazenar a quantidade de pokemons
            const quantPokemon = dataPokemon.count
            setCount(quantPokemon)

            // Armazenar o nome e url de cada pokemon
            const results = dataPokemon.results
            // console.log(results)
            setPokemon(results)

            

        } catch (error) {
            console.log(error);
        };
    };

    const [pokemonInfo, setPokemonInfo] = useState<PokeTypes[]>([])

    const loadPokemonInfo = async (name: string = "") => {
        try {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

            const data = response.data
            // console.log(data)
            

            // pegando a foto
            // para exibir na tela tem que usar um map e tirar esse 
            // ".front_default", ele deve ser passado dentro do map.
            const artwork = data.sprites.other["official-artwork"].front_default
            console.log(artwork)

            

            

        } catch (error) {
            console.log(error);
        };
    }

    const value: PokeContextTypes = {
        loadPokemons,
        count,
        pokemons,
        loadPokemonInfo,
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