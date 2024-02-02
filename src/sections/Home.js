import React, { memo } from "react";
import Container from "../components/Container";
import { StartNowButton } from "../components/Buttons";

import personStudent from "../assets/images/Person_5_Student.png";
import backgroundImage from "../assets/images/image_O.png";
import item1 from "../assets/images/item_1.png";
import item2 from "../assets/images/item_2.png";
import item3 from "../assets/images/item_3.png";
import item4 from "../assets/images/item_4.png";

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
          <div className="md:mb-[48px] my-10 flex flex-wrap items-center justify-center relative z-20">
            <div className="flex flex-col items-start justify-center gap-5 max-w-[530px]">
              <h1 className="text-[#0A0812] leading-[56px] font-semibold xl:text-[42px]  text-[20px] text-start ">
                Boost Your Confidence
                <p className="font-light">in Spoken English</p>
              </h1>
              <p className="text-[#475467] leading-[20px] font-normal mb-10">
                AI-powered simulator to self-practice the IELTS speaking test,
                job interview and everyday conversational English
              </p>
              <StartNowButton />
            </div>
            <div className="flex relative w-[580px] h-[580px] items-center justify-center mt-5">
              <img
                className="z-10"
                src={personStudent}
                alt="Person_5_Student.png"
              />
              <div className="absolute  top-16 right-12  z-10">
                <img src={item1} alt="" />
              </div>
              <div className="absolute bottom-28 right-0 z-10">
                <img src={item2} alt="" />
              </div>
              <div className="absolute  bottom-28 left-0 z-10">
                <img src={item3} alt="" />
              </div>
              <div className="absolute  top-16 left-8  z-10">
                <img src={item4} alt="" />
              </div>
              <img
                className="absolute z-5"
                src={backgroundImage}
                alt="image_O.png"
              />
            </div>
          </div>
          <div className=" absolute z-0 left-0 top-0 w-full h-full flex items-center justify-center opacity-50">
            <div className="blur-3xl bg-[#32394a62] h-[75%] rounded-full aspect-square mr-[-45%]"></div>
            <div className="blur-3xl bg-[#999bec54] h-[75%] rounded-full aspect-square "></div>
            <div className="blur-3xl bg-[#4de2cc54] h-[75%] rounded-full aspect-square ml-[-45%]"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default memo(Home);
