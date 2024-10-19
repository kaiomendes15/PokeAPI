import React from "react";
import './colorsetter.css'
import '../../index.css'

type BackgroundColorSetterProps = {
    children: React.ReactNode
    types: any
}
function BackgroundColorSetter({types, children}: BackgroundColorSetterProps) {

    
    if (types[0].type.name == "grass") {
        return (
            <div className="grass pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "fire") {
        return (
            <div className="fire pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "water") {
        return (
            <div className="water pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "eletric") {
        return (
            <div className="eletric pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "ice") {
        return (
            <div className="ice pokemon-card">
                {children} 
            </div>
        );
    } else if (types[0].type.name == "fighting") {
        return (
            <div className="fighting pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "poison") {
        return (
            <div className="poison pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "ground") {
        return (
            <div className="ground pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "flying") {
        return (
            <div className="flying pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "psychic") {
        return (
            <div className="psychic pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "bug") {
        return (
            <div className="bug pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "rock") {
        return (
            <div className="rock pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "ghost") {
        return (
            <div className="ghost pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "dragon") {
        return (
            <div className="dragon pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "dark") {
        return (
            <div className="dark pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "steel") {
        return (
            <div className="steel pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "fairy") {
        return (
            <div className="fairy pokemon-card">
                {children}
            </div>
        );
    } else if (types[0].type.name == "normal") {
        
        if (types[1]) {
            if (types[1].type.name == "grass") {
                return (
                    <div className="grass pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "fire") {
                return (
                    <div className="fire pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "water") {
                return (
                    <div className="water pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "eletric") {
                return (
                    <div className="eletric pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "ice") {
                return (
                    <div className="ice pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "fighting") {
                return (
                    <div className="fighting pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "poison") {
                return (
                    <div className="poison pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "ground") {
                return (
                    <div className="ground pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "flying") {
                return (
                    <div className="flying pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "psychic") {
                return (
                    <div className="psychic pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "bug") {
                return (
                    <div className="bug pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "rock") {
                return (
                    <div className="rock pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "ghost") {
                return (
                    <div className="ghost pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "dragon") {
                return (
                    <div className="dragon pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "dark") {
                return (
                    <div className="dark pokemon-card">
                        {children}
                    </div>
                );
            } else if (types[1].type.name == "steel") {
                return (
                    <div className="steel pokemon-card">
                        {children}
                    </div>
                );
            } else {
                return (
                    <div className="fairy pokemon-card">
                        {children}
                    </div>
                );
            };

        } else {
            return (
                <div className="normal pokemon-card">
                     {children}
                </div>
            )
        }
    
};
}

export default BackgroundColorSetter