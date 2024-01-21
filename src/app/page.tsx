"use client";
import Image from "next/image";
import { motion, animate } from "framer-motion";
import apple_logo from "../../images/peaer.jpeg";
import Progressbar from "components/Progressbar";
import { useEffect, useRef, useState } from "react";
import LoginScreen from "components/LoginScreen";

const show = {
  opacity: 1,
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(true);
  const [display, setDisplay] = useState("block");
  const parent_ref = useRef(null);
  // useEffect(() => {}, [animationComplete]);
  return (
    <>
      <div className="overscroll-hidden h-screen">
        <motion.div
          className={`fixed flex h-screen w-screen items-center justify-center overflow-hidden bg-black`}
          // ref={parent_ref}
          transition={{ duration: 0.5 }}
          animate={animationComplete == true ? show : hide}
        >
          <div className="flex h-96 w-72 flex-col flex-wrap items-center justify-center">
            <Image
              alt="Apple logo"
              src={apple_logo}
              width={130}
              height={200}
              className=""
            />
            <Progressbar setter={setAnimationComplete} />
          </div>
        </motion.div>
        {animationComplete == false && <LoginScreen />}
      </div>
    </>
  );
}
