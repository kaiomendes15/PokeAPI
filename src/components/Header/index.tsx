
import { usePoke } from "../../contexts/pokeProvider";
import './header.css'
import ToggleSwitcher from "../ToggleSwitcher";
import '../../index.css'




const Header = () => {
    
    const {switchSprite} = usePoke();
    
    

    return (
        <>
            <div className="switcher-position">
                <ToggleSwitcher onChange={switchSprite}/>
            </div>
            <header>
                <h1>Pokédex</h1>
                <p>Search for a Pokémon by name or using its National Pokédex number.</p>
            </header>
        </>
    );
};

export default Header;