
import './colorsetter.css'
import '../../index.css'
import axios from 'axios';

type BackgroundColorSetterProps = {
    types: any
}
function TypeIconSetter({types}: BackgroundColorSetterProps) {

    const loadTypes = async (type0: any, type1?: any) => {
        
        try {
            
            if (type1) {
                const response = axios.get(`https://pokeapi.co/api/v2/type/${type0}/`)
            }

        } catch (error) {
            console.log(error);
        }
    };

    
    if (types[0].type.name == "grass") {
        
    } else if (types[0].type.name == "fire") {
        return (
            <div className="fire pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "water") {
        return (
            <div className="water pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "eletric") {
        return (
            <div className="eletric pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "ice") {
        return (
            <div className="ice pokemon-card">
 
            </div>
        );
    } else if (types[0].type.name == "fighting") {
        return (
            <div className="fighting pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "poison") {
        return (
            <div className="poison pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "ground") {
        return (
            <div className="ground pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "flying") {
        return (
            <div className="flying pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "psychic") {
        return (
            <div className="psychic pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "bug") {
        return (
            <div className="bug pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "rock") {
        return (
            <div className="rock pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "ghost") {
        return (
            <div className="ghost pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "dragon") {
        return (
            <div className="dragon pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "dark") {
        return (
            <div className="dark pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "steel") {
        return (
            <div className="steel pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "fairy") {
        return (
            <div className="fairy pokemon-card">

            </div>
        );
    } else if (types[0].type.name == "normal") {
        
        if (types[1]) {
            if (types[1].type.name == "grass") {
                return (
                    <div className="grass pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "fire") {
                return (
                    <div className="fire pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "water") {
                return (
                    <div className="water pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "eletric") {
                return (
                    <div className="eletric pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "ice") {
                return (
                    <div className="ice pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "fighting") {
                return (
                    <div className="fighting pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "poison") {
                return (
                    <div className="poison pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "ground") {
                return (
                    <div className="ground pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "flying") {
                return (
                    <div className="flying pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "psychic") {
                return (
                    <div className="psychic pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "bug") {
                return (
                    <div className="bug pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "rock") {
                return (
                    <div className="rock pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "ghost") {
                return (
                    <div className="ghost pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "dragon") {
                return (
                    <div className="dragon pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "dark") {
                return (
                    <div className="dark pokemon-card">
        
                    </div>
                );
            } else if (types[1].type.name == "steel") {
                return (
                    <div className="steel pokemon-card">
        
                    </div>
                );
            } else {
                return (
                    <div className="fairy pokemon-card">
        
                    </div>
                );
            };

        } else {
            return (
                <div className="normal pokemon-card">
        
                </div>
            )
        }
    
};
}

export default TypeIconSetter