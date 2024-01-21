import background_image from "../images/colourfulday.jpeg";
import memoji from "../images/memoji.jpeg";
import Image, { type StaticImageData } from "next/image";
import aboutme from "../images/aboutme.png";
import projects from "../images/projects.png";
import moment from "moment";
import messages from "../images/messages.png";
import contactme from "../images/contactme.png";
import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Safari from "./Safari";
import open_app from "utils/open_app";
import Messages from "./Messages";
import MyProjects from "./MyProjects";
const show = {
  opacity: 1,
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};
function LoginScreen() {
  const [openApps, setOpenApps] = useState<Array<string>>([
    "safari",
    "messages",
  ]);
  const [show_or_hide, setshow] = useState(true);
  const parent_ref = useRef(null);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setshow(false);
        console.log("Close");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <motion.div className=" h-screen w-screen">
      <Menubar />
      <Image
        alt="background image"
        src={background_image}
        fill
        quality={50}
        objectFit="cover"
        className="-z-10"
      />
      {/* Profile Photo */}
      <motion.div
        className="z-10 flex h-screen w-full flex-col flex-wrap items-center justify-center"
        animate={show_or_hide ? show : hide}
        transition={{ duration: 0.5 }}
      >
        <Image
          alt="memoji"
          src={memoji}
          width={150}
          height={150}
          className="mb-10 rounded-full"
        />
        {/* <div className="m-10 font-sans text-7xl font-bold text-gray-200">
          <p className="font-sans">9:14am</p>
        </div> */}
        <p className="text-gray-200">Press escape to login</p>
      </motion.div>

      {/* DOCK */}
      {show_or_hide == false && (
        <div className="h-screen w-screen">
          <Safari />
          <Dock />
          <MyProjects />
          {/* <Messages /> */}
        </div>
      )}
    </motion.div>
  );
}

const configured_apps = [
  {
    app_title: "About Me",
    app_icon: aboutme,
  },
  {
    app_title: "Contact me",
    app_icon: contactme,
  },
  {
    app_title: "Projects",
    app_icon: projects,
  },
  {
    app_title: "messages",
    app_icon: messages,
  },
];

function Dock() {
  const mouseX = useMotionValue(Infinity);
  return (
    <div className="flex w-full justify-center">
      <div className="fixed bottom-0 m-4 flex h-20 w-1/2 justify-center rounded-2xl ">
        <div
          className="mx-auto flex w-full items-end justify-center gap-4 rounded-2xl bg-gray-700 bg-opacity-30 pb-2"
          onMouseMove={(e) => {
            // console.log(e.pageX);
            mouseX.set(e.pageX);
          }}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {configured_apps.map((value, i) => {
            return <AppIcon key={i} mouseX={mouseX} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

function AppIcon({
  mouseX,
  value,
}: {
  mouseX: MotionValue<number>;
  value: {
    app_title: string;
    app_icon: StaticImageData;
  };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const show_label = false;
  const [showlb, setlb] = useState(false);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    // console.log(ref.current?.getBoundingClientRect());
    const return_value = val - bounds.x - bounds.width / 2;
    if (return_value > -64 && return_value < 64) {
      // console.log("true ", ref.current?.getBoundingClientRect());
      // show_label = true;
    }
    return return_value;
  });
  const widthSync = useTransform(distance, [-250, 0, 250], [64, 128, 64]);
  const width = useSpring(widthSync, {
    damping: 15,
    mass: 0.1,
    stiffness: 200,
  });

  const [title_css, set_title_css] = useState(
    `relative -right-12 -top-24 hidden `,
  );
  return (
    <>
      <motion.div
        ref={ref}
        style={{ width: width }}
        onClick={() => {
          // unhide messages div with possible aninmation.
          console.log("app opened");
          // TODO: Append to open apps array
          let curernt_open_apps: string[] = [];
          if (localStorage.getItem("open") !== null) {
            console.log(localStorage.getItem("open"));
            curernt_open_apps = JSON.parse(localStorage.getItem("open"));
            curernt_open_apps.push(value.app_title);
            const set_open_apps = new Set(curernt_open_apps);
            localStorage.setItem(
              "open",
              JSON.stringify(Array.from(set_open_apps)),
            );
          } else {
            localStorage.setItem("open", JSON.stringify([value.app_title]));
          }
          open_app(value.app_title);
        }}
        className="bg-grey-200 flex aspect-square w-16 items-center justify-center rounded-2xl"
        onHoverStart={() => {
          set_title_css(`relative -left-12 -top-36  inline`);
        }}
        onHoverEnd={() => {
          set_title_css(`fixed -left-24 -top-36  hidden`);
        }}
      >
        <Image src={value.app_icon} alt="iamge" width={100} height={100} />
      </motion.div>
    </>
  );
}

function Menubar() {
  return (
    <div className="align-center float-right flex h-5 w-full items-center justify-end bg-black bg-opacity-30 p-2 text-right text-xs text-white">
      <svg
        style={{ color: "white", marginRight: 3 }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-wifi"
        viewBox="0 0 16 16"
      >
        {" "}
        <path
          d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"
          fill="white"
        ></path>{" "}
        <path
          d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
          fill="white"
        ></path>{" "}
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 10 }}
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-battery-full"
        viewBox="0 0 16 16"
      >
        {" "}
        <path d="M2 6h10v4H2V6z" />{" "}
        <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />{" "}
      </svg>
      <p className="opacity-100">{moment().format("hh:mm A")}</p>
    </div>
  );
}

export default LoginScreen;
