import Button from "@/components/widgets/Button";
import Container from "@/components/widgets/Container";
import Image from "next/image";
import hero_image from "@/assets/images/hero_app_images.png";
import CornersSvg from "@/assets/svg_components/CornersSvg";

const HeroSection = () => {
    return (
        <div className="bg-primary relative isolate">
            <CornersSvg className="absolute -z-10" />
            <Container className="pt-[143px] pb-[130px] flex items-center text-white">
                {/* Texts */}
                <div>
                    {/* Heading Title */}
                    <h2 className="text-[48px] font-bold ">Helping doctors digitize their practice</h2>

                    <p className="py-8 leading-loose max-w-[456px]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-[18px]">
                        <Button variant="secondary">Schedule a Demo</Button>
                        <Button variant="light outlined">Contact Sales</Button>
                    </div>
                </div>
                {/* Right Banner */}
                <div className="mt-[80px] md:block hidden">
                    <Image src={hero_image.src} width={773} height={584} />
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
