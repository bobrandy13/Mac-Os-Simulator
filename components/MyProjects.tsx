import { useDragControls } from "framer-motion";
import { motion } from "framer-motion";

function MyProjects() {
  const controls = useDragControls();
  return (
    <div className="h-screen w-screen">
      <motion.div
        drag
        dragMomentum={false}
        dragListener={false}
        dragElastic={0.5}
        className="relative right-24 top-24 h-[400px] w-[900px] rounded-lg bg-white"
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="relative -top-5 flex h-10 w-full items-center rounded-t-lg bg-gray-700"
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
            aboutme.com.au
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MyProjects;
