import React from "react";

const Button = ({ children, variant }) => {
    const variants =
        variant === "primary"
            ? "bg-primary text-white"
            : variant === "secondary"
            ? "bg-white text-primary"
            : variant === "outlined"
            ? "bg-primary border-[2px] border-white"
            : variant === "light outlined"
            ? "bg-primary border-[2px] border-white/30"
            : variant === "none"
            ? "hover:shadow-none"
            : "";
    return (
        <button className={`px-6 py-[15px] cursor-pointer font-bold rounded-[28px] hover:shadow-lg ${variants}`}>
            {children}
        </button>
    );
};

export default Button;
