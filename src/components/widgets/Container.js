import React from "react";

const Container = ({ children, className }) => {
    return <div className={`max-w-[1240px] mx-auto px-[10px] ${className}`}>{children}</div>;
};

export default Container;
