import React from "react";

type ButtonNextProps = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}


const InteractButton = ({onClick, children, className}: ButtonNextProps) => {

    return (
        <div>
            <button className={className} onClick={onClick}>{children}</button>
        </div>
    )
};

export default InteractButton;