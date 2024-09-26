import React from "react";

type ButtonNextProps = {
    onClick?: () => Promise<void>;
    children: React.ReactNode;
}


const ButtonNext = ({onClick, children}: ButtonNextProps) => {

    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
};

export default ButtonNext;