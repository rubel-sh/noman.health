import React from "react";
import Container from "../widgets/Container";
import Link from "next/link";
import TwitterIcon from "@/assets/svg_components/TwitterIcon";
import FacebookIcon from "@/assets/svg_components/FacebookIcon";
import DribbleIcon from "@/assets/svg_components/DribbleIcon";

const Footer = () => {
    return (
        <footer>
            <Container className="flex flex-col md:flex-row justify-between py-[56px]">
                {/* Nav Links */}
                <nav>
                    <ul className="flex items-center flex-wrap  gap-x-10 gap-y-5 font-bold text-[16px]">
                        <li>
                            <Link href={"#"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Products</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Pricing</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Services</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Project</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Contacts</Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Icons */}
                <div className="flex items-center gap-10 mt-10 md:mt-0">
                    <Link href={"#"}>
                        <TwitterIcon />
                    </Link>
                    <Link href={"#"}>
                        <FacebookIcon />
                    </Link>
                    <Link href={"#"}>
                        <DribbleIcon />
                    </Link>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
