"use client";

import React, { useState } from "react";
import Container from "../widgets/Container";
import Link from "next/link";
import Button from "../widgets/Button";
import HamMenuSvg from "@/assets/svg_components/HamMenuSvg";

const PrimaryHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="py-[28px] absolute z-10 top-0 left-0 right-0">
            <Container>
                <div className="flex justify-between items-center text-white  relative">
                    {/* Logo */}
                    <h1 className="text-[28px] text-white font-bold">Health</h1>

                    {/* Desktop */}

                    {/* Navs */}
                    <nav className="hidden  md:block">
                        <ul className="flex gap-10 font-bold text-normal">
                            <li>
                                <Link href={"#"}>About</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Services</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Pricing</Link>
                            </li>
                            <li>
                                <Link href={"#"}>Contacts</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Login/signup */}
                    <div className="hidden  md:flex items-center gap-2">
                        <Button variant="none">Login</Button>
                        <Button variant="outlined">Sign Up</Button>
                    </div>

                    {/* Mobile View */}
                    <div className="text-white cursor-pointer block  md:hidden" onClick={handleMenuToggle}>
                        <HamMenuSvg />
                    </div>

                    {isOpen && (
                        <div className="absolute block  md:hidden right-0 top-full w-full bg-[#0F4386] rounded-xl">
                            {/* Navs */}
                            <nav className="">
                                <ul className="flex flex-col items-center gap-5 py-5 font-bold text-normal">
                                    <li>
                                        <Link href={"#"}>About</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>Services</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>Contacts</Link>
                                    </li>
                                </ul>
                            </nav>

                            {/* Login/signup */}
                            <div className="block lg:flex items-center text-center  gap-2 pb-5">
                                <Button variant="none">Login</Button>
                                <Button variant="outlined">Sign Up</Button>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default PrimaryHeader;
