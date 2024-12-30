import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import about from '../assets/about.mp4';
import about_pic from "../assets/about_picc.png";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">

        <AnimatedTitle
          // title="Changing the world's <br /> Perception, one frame at a time."
          title="Turning Visions into <br /> Cinematic Reality"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>LIGHTS! COLORS! AND PURE CREATIVITY!</p>
          <p className="text-gray-500">
          Welcome to the Reel World of Daveedo Production's where we craft imaginations!
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src={about}
            autoPlay
            muted
            loop
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
