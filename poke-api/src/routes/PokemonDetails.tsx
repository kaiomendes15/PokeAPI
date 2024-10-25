import { useParams } from 'react-router-dom';
import '../index.css'
import { usePoke } from '../contexts/pokeProvider';
import { useEffect } from 'react';


const PokemonDetails = () => {

    const {idLink} = useParams();
    const {pokemons} = usePoke();
    const {loadPokemons} = usePoke();
    
    

    useEffect(() => {
        loadPokemons("", idLink, idLink)
    }, [])
    

    return (
        <div>
            
        </div>
    )
};

export default PokemonDetails;