import { useParams } from 'react-router-dom';
import '../index.css'
import { usePoke } from '../contexts/pokeProvider';
import { useEffect } from 'react';


const PokemonDetails = () => {

    const {idLink} = useParams();
    const {loadPokemons} = usePoke();
    
    

    useEffect(() => {
        loadPokemons(Number(idLink), Number(idLink));
    }, [])
    

    return (
        <div>
            
        </div>
    )
};

export default PokemonDetails;