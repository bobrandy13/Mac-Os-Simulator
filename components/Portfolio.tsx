import Image from "next/image";
import kevinhuang from "../images/kevinhuang.jpeg";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedText";
import { Button } from "flowbite-react";

function Portfolio() {
  return (
    <div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 400, y: 50, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      ></motion.div> */}
      <div className="relative -top-5 flex h-[600px] flex-col items-center justify-center bg-slate-300 font-sans">
        <Image
          alt={"profile image"}
          src={kevinhuang}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className={"m-0 grid place-content-center text-center"}>
          <h1
            className={
              "font-sdf font-xl relative text-gray-700 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:animate-typewriter before:bg-[#AEC6CF] before:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:w-[.125em] after:animate-blink after:animate-typewriter after:bg-black"
            }
            style={{
              fontSize: "clamp(1rem, 3vw + 1rem, 4rem)",
            }}
          >
            Hello, my name is Kevin
          </h1>
        </div>
        <div className="font-sdf text-bold text-center text-xl text-gray-600">
          I am a High School Student at Cherrybrook Technology High School.{" "}
        </div>
        <Button className="m-4 p-1">My Projects</Button>
      </div>
    </div>
  );
}

export default Portfolio;
