import React, { memo } from "react";
import Container from "../components/Container";
import { StartNowButton } from "../components/Buttons";

const Home = ({ id }) => {
  const el = () => {
    const rand = Math.floor(Math.random() * 6);
    const colors = [
      "bg-transparent",
      "bg-[#D6BBFB]",
      "bg-[#E9D7FE]",
      "bg-[#F4EBFF]",
      "bg-transparent",
      "bg-transparent",
    ];
    return (
      <span
        className={`w-[500px] h-[70px] ${colors[rand]} rounded-[10px] -skew-x-[8deg] inline-block z-0`}
      />
    );
  };

  return (
    <>
      <div
        id={id}
        className="xl:pt-[96px] pt-[100px] bg-[#F9F5FF] md:pb-[50px] pb-10 overflow-hidden relative"
      >
        <Container>
          <div className="md:mb-[48px] mb-10">
            <h1 className="text-[#42307D] md:leading-[72px] font-semibold xl:text-[60px] md:text-[50px] text-[20px] text-center md:max-w-[85%] mx-auto">
              Get your real IELTS speaking results before the actual exam!
            </h1>
            <p className="text-[#6941C6] leading-[20px] text-center mt-6 md:max-w-[60%] mx-auto font-normal">
              AI-powered simulator to self-practice the IELTS speaking mock
              exam, job interview and everyday conversational English
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <StartNowButton />
          </div>

          <div className="flex justify-center mx-auto relative md:mt-[64px] mt-10 md:w-[768px] w-full md:h-[432px] h-[243px] z-10">
            <iframe
              className="rounded-md"
              width="100%"
              src="https://www.youtube.com/embed/aitLkJ_VYMw?si=psbdus0WYNses5Tk"
              title="IELTS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="h-[200px] w-[200%] -translate-x-[25%] absolute -rotate-[8deg] left-0 gap-2 bottom-[100px] grid grid-rows-3">
            <div className="flex animate-moveleft">
              {Array(40)
                .fill(0)
                .map((_) => el())}
            </div>
            <div className="flex ml-20 animate-moveleft">
              {Array(40)
                .fill(0)
                .map((_) => el())}
            </div>
            <div className="flex mr-20 animate-moveleft">
              {Array(40)
                .fill(0)
                .map((_) => el())}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default memo(Home);
