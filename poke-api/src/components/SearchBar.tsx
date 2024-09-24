import React from "react";
import { GoSearch } from "react-icons/go";
import { usePoke } from "../contexts/pokeProvider";



const SearchBar = () => {

    const {count} = usePoke();

    return (
        <div>
            <div>
                <input type="text" placeholder="Digite o nome do pokemon"/>
                <button>
                    <GoSearch />
                </button>
            </div>
        </div>
    );
};

export default SearchBar