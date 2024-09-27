import React from "react";

type ButtonNextProps = {
    onClick?: () => void;
    children: React.ReactNode;
}


const InteractButton = ({onClick, children}: ButtonNextProps) => {

    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
};

export default InteractButton;