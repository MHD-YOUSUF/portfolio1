import React from "react";
import mine from "../../assets/mine-min.png";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="home" className={` `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-semibold sm:text-[2rem] font-[]"
            >
              Hey, I'm{" "}
              <span className="text-yellow- font-bold font-mono">
                Mohammed Yousuf
              </span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Full Stack", 2000, "Web Developer", 2000]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Final-year undergraduate student.{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/mhd-yousuf/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1 relative">
                Resume <FiDownload />
                {/* <span class="absolute top-[-11px] right-[-31px] flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span> */}
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://devalphaspace.com/">
                  {" "}
                  <BsArrowUpRightCircleFill className=" h-[1.7rem] w-[1.7rem] text-[1rem] hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mhd-yousuf/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/MHD-YOUSUF">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>

              <li>
                <a href="https://twitter.com/Yousuf_amazing">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end">
            <div className="h-[80%] md:h-[95%]">
              <img
                loading="lazy"
                // data-aos="fade-up"
                className="image h-[450px] w-[450px] md:h-[300px] md:w-[300px]  overflow-hidden object-cover  md:m-auto sm:m-0"
                src="https://res.cloudinary.com/diprsfxml/image/upload/v1714144254/profile_nijwh6.jpg"
                // src={mine}
                alt="mine"
              />
            </div>
            <div className=" absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  loading="lazy"
                  className=" w-[120px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
