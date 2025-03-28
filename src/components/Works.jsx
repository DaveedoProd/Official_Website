import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";
import graded from '../assets/Work2/colo.mp4';
import thumb from '../assets/Work2/thum.mp4';
import cine from '../assets/Work2/cini.mp4';
import velocity from '../assets/Work2/velo2.mp4';
import yt from '../assets/Work2/ytvi.mp4';


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">Watch the full video</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Works = () => (
  <section id="works" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <h1 className="bento-title2 special-font text-red-500">
          WORKS
        </h1>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Check out our team’s epic creations, from jaw-dropping velocity edits to cinematic masterpieces, all crafted to make your imagination shine.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src={yt}
          title={
            <>
              Youtube Videos
            </>
          }
          description="Turning ideas into viral YouTube magic—crafted to captivate and inspire"
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src={velocity}
            title={
              <>
                Velocity Edits
              </>
            }
            description="High-speed visuals for the Gen Z era—where brands meet reels that truly click"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src={graded}
            title={
              <>
                Color Grading
              </>
            }
            description="Bringing stories to life with colors that speak louder than words"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src={cine}
            title={
              <>
                Cinematic Videos
              </>
            }
            description="Crafting cinematic masterpieces—where every frame feels like the big screen"
            isComingSoon
          />
        </BentoTilt>

        <Link to="/works">
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                See all works.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
        </Link>

        {/* <BentoTilt className="bento-tilt_2">
          <video
            src={thumb}
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
         */}


        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src={thumb}
            title={
              <>
                Thumbnails
              </>
            }
            description="First impressions matter—our thumbnails make sure you’re clicked on every time"
            isComingSoon
          />
        </BentoTilt>

      </div>
    </div>
  </section>
);

export default Works;
