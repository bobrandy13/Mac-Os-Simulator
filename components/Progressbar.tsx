import { useState } from "react";
import { motion } from "framer-motion";
function Progressbar({ setter }) {
  return (
    <div className="h-24 w-72">
      <div className="flex h-1 w-72 flex-row items-stretch justify-start overflow-hidden rounded-lg bg-black">
        <motion.div
          className="w-0 bg-white"
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 3,
          }}
          onAnimationComplete={() => setter(false)}
        />
      </div>
    </div>
  );
}

export default Progressbar;
