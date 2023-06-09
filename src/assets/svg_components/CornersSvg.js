import React from "react";

const CornersSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 1440 691" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M874 690.5V455L1441.5 243V386.5L874 690.5Z"
                fill="url(#paint0_linear_1355_9018)"
                fill-opacity="0.3"
            />
            <path d="M405 0L0 286.5V0H405Z" fill="url(#paint1_linear_1355_9018)" fill-opacity="0.3" />
            <defs>
                <linearGradient
                    id="paint0_linear_1355_9018"
                    x1="1251.63"
                    y1="243"
                    x2="736.55"
                    y2="546.158"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1355_9018"
                    x1="269.5"
                    y1="0.000129111"
                    x2="-76.4999"
                    y2="227"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default CornersSvg;
