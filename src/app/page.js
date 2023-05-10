import EmailSubscribeSection from "@/components/UI/homepage/EmailSubscribeSection";
import HeroSection from "@/components/UI/homepage/HeroSection";
import TestimonialSection from "@/components/UI/homepage/TestimonialSection";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <TestimonialSection />
            <EmailSubscribeSection />
        </main>
    );
}
