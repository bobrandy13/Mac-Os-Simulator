import { motion, useDragControls } from "framer-motion";
import Image from "next/image";

import avi_gupta from "../images/avigupta.png";
import ChatBubble from "./ChatBubble";
function Messages() {
  let controls = useDragControls();
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragControls={controls}
      dragListener={false}
      dragElastic={0.5}
      className="absolute right-48 top-48 h-[600px] w-[900px] rounded-lg bg-[#404036] bg-opacity-90 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative flex h-10 w-full items-center rounded-t-lg bg-gray-700"
        onPointerDown={(e) => {
          console.log(e);
          return controls.start(e);
        }}
      >
        <button className="ml-2 mr-2 h-3 w-3 rounded-full bg-[#EC6a52]"></button>
        <button className="mr-2 h-3 w-3 rounded-full bg-[#f5bf4f]"></button>
        <button className="h-3 w-3 rounded-full bg-[#61c353]"></button>
        {/* search bar */}
        <div className="relative mx-auto my-auto h-8 w-1/2 rounded-lg border border-[#686867] bg-gray-700 p-1 align-middle text-gray-200">
          different app.com.au
        </div>
      </div>
      <Messages_body />
    </motion.div>
  );
}
function Messages_body() {
  return (
    <div className="flex-direction-row flex h-[93%] w-full rounded-lg bg-opacity-20">
      <div className="w-1/3">
        <div className="flex justify-center ">
          <div className="mt-4 h-48 w-36 rounded-lg bg-[#1184FF] p-5">
            <Image
              alt="avi gupta"
              src={avi_gupta}
              className=""
              height={100}
              width={100}
            />
            <p className="pt-4 text-center">Poo Poo</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 rounded-b-lg bg-[#1e1e1e]">
        <div className="float-right m-4 ">
          <ChatBubble
            message="WHy you no reply "
            person="kevin huang"
            time="now"
          />
          <ChatBubble message="OI " person="kevin huang" time="now" />
          <ChatBubble message="wyd" person="kevin huang" time="now" />
        </div>
        <div className="relative -bottom-96 float-left m-4">
          <ChatBubble
            message="i was busy"
            person="avi gupta"
            time="Next year 2024"
          />
        </div>
      </div>
    </div>
  );
}

export default Messages;
