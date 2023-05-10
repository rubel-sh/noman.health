import EmailIcon from "@/assets/svg_components/EmailIcon";
import Container from "@/components/widgets/Container";
import React from "react";

const EmailSubscribeSection = () => {
    return (
        <Container className="flex justify-between flex-col md:flex-row gap-y-5 md:gap-y-0 py-[80px] border-b border-b-[#e7e5ea]">
            <h1 className="text-[28px] text-black font-bold">Health</h1>

            {/* Emali + Subscribe btn */}
            <div>
                {/* Email Field */}
                <div className="rounded-[28px] bg-[#f8f8f9] py-[15px] px-[20px] flex  items-center gap-x-5">
                    <EmailIcon />
                    <input
                        type="text"
                        placeholder="Your email"
                        className="text-[#857d94] bg-[#f8f8f9] focus-visible:outline-none text-[16px]"
                    />
                </div>
            </div>
        </Container>
    );
};

export default EmailSubscribeSection;
