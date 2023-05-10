import Container from "@/components/widgets/Container";
import testimonial_img from "@/assets/images/testimonial_image.png";
import quote from "@/assets/images/quote.png";
import Image from "next/image";

const TestimonialSection = () => {
    return (
        <div className="bg-white pt-[100px] pb-[44px] text-black">
            <Container>
                <h2 className="text-black text-[40px] font-bold max-w-[366px] mb-[56px]">
                    Our happy clients says about us
                </h2>

                {/* Carousel */}
                <div className="flex flex-col md:flex-row items-center gap-10  md:gap-[101px]">
                    <Image src={testimonial_img.src} width={453} height={334} className="w-full" />
                    <div className="flex flex-col ">
                        <Image src={quote.src} width={51} height={38} className="mb-[32px] " />
                        <h2 className="font-bold text-[24px] mb-[36px]">
                            “They are able to help a startup like mine scale and are very responsive to all our unique
                            needs”
                        </h2>
                        <h3 className="text-[18px] font-bold mb-[12px]">— Yacob Sudarmaji</h3>
                        <p className="text-[16px] text-[#757B8A]">Product Manager, Qnet</p>

                        {/* Carousel Dots */}
                        <div className="flex items-center justify-center md:justify-start gap-[12px] mt-[46px]">
                            <div className="w-[13px] aspect-square rounded-full bg-[#243d31]"></div>
                            <div className="w-[13px] aspect-square rounded-full bg-[#d6dfdb]"></div>
                            <div className="w-[13px] aspect-square rounded-full bg-[#d6dfdb]"></div>
                            <div className="w-[13px] aspect-square rounded-full bg-[#d6dfdb]"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TestimonialSection;
