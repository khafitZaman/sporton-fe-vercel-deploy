import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";
import Image from "next/image";

const HeroSection =  () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image src="/images/img-basketball-transparent.svg" width={632} height={632} alt="Image sportOn" className="absolute -left-30 -top-10 grayscale"/>
        <div className="relative ml-40 w-full">
          <div className="text-primary italic">
            Friday Sale, 50%
          </div>
          <h1 className="font-extrabold text-[95px] italic leading-tight bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br />
            TOP-QUALITY <br />
            SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. <br /> Limitless motion.
          </p>  
          <div className="flex gap-5 mt-14">
            <Button>
              Explore More
              <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video <Image src="/images/icon-play-video.svg" alt="icon play video" width={29} height={29} />
            </Button>
          </div>
        </div>
        <Image src="/images/img-hero.svg" width={623} height={688} alt="image sporton hero" className="absolute -right-24 top-1/2 -translate-y-3/5" />
      </div>
      <Image src="/images/img-ornament-hero.svg" width={180} height={180} alt="Image sportOn" className="absolute right-0 top-1/2 -translate-y-1/2"/>
    </section>
  );
}

export default HeroSection;