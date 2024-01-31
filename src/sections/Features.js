import React from "react";
import Container from "../components/Container";
import { RiWechatLine, RiChatSmile3Line } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuMonitorCheck } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const Features = ({ id }) => {
  const features = [
    {
      id: 1,
      icon: RiWechatLine,
      title: "Practice Spoken English Every Day",
      description:
        "With Daily Stories and Courses, you can practice every day to break through language barriers.",
      link: "https://www.google.com",
    },
    {
      id: 2,
      icon: AiOutlineThunderbolt,
      title: "Prepare IELTS Speaking",
      description:
        "The IELTS Speaking Test Simulator instantly provides you with a band score and a detailed report.",
      link: "https://www.google.com",
    },
    {
      id: 3,
      icon: LuMonitorCheck,
      title: "Monitor Your English Level",
      description:
        "Automated Spoken English Level Test evaluates your CEFR level with 95% accuracy. Take it again whenever you like.",
      link: "https://www.google.com",
    },
    {
      id: 4,
      icon: RiChatSmile3Line,
      title: "Impress in a Job Interview",
      description: "Interview Success: Your Words, Our Expertise.",
      link: "https://www.google.com",
    },
  ];

  return (
    <section id={id} className="md:py-[50px] py-10">
      <Container>
        <h1 className="text-center text-[#FF0202] md:text-[16px] font-semibold">
          Features
        </h1>
        <h1 className="md:text-[36px] text-[24px] text-[#101828] font-semibold mt-3 text-center">
          Engage in the exam simulator and Get Instant Feedback
        </h1>
        <p className="text-[#475467] md:mt-5 mt-2 font-normal md:text-[20px] text-[14px] text-center md:max-w-[70%] mx-auto">
          Powerful, self-serve product and precise AI feedback, fast
          improvement. Trusted by IELTS students worldwide.
        </p>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] md:mt-[64px] mt-10">
          {features.map(({ icon: Icon, title, description, link }, index) => (
            <div className="bg-[#F9FAFB] p-[24px] rounded-[10px]" key={index}>
              <span className="bg-[#FF0202] w-[48px] h-[48px] flex items-center justify-center rounded-[10px]">
                <Icon size={25} color="white" />
              </span>

              <h1
                title={title}
                className="md:mt-10 mt-5 text-[#101828] text-[16px] font-semibold line-clamp-1"
              >
                {title}
              </h1>
              <p
                title={description}
                className="text-[16px] mt-2 leading-[24px] text-[#475467] font-normal line-clamp-3 h-[72px]"
              >
                {description}
              </p>
              <a
                href={link}
                className="flex items-center w-fit text-[#FF0202] text-[16px] gap-2 font-semibold mt-5 hover:gap-4 duration-200"
              >
                View all
                <FaArrowRightLong />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
