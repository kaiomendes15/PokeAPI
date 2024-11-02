declare type PokemonData = {
    id: number;
    name: string;
    types: { type: { name: string } }[];
    sprites: {
        front_default: string;
        other: {
            'official-artwork': { front_default: string }
        }
    };
};