import React from "react";
import Container from "../components/Container";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiChatsCircleBold } from "react-icons/pi";
import { IoShareOutline } from "react-icons/io5";
import { RiChatSmile2Line } from "react-icons/ri";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";

const Benefits = ({ id }) => {
  const benefits = [
    {
      id: 1,
      title: "Manage",
      description:
        "I don't have to spend too much money for this daily speaking I have",
      icon: PiChatsCircleBold, // chat icon
    },
    {
      id: 2,
      title: "Deliver  answers",
      description:
        "The possibility to record my speech and get feedback without the need to arrange appointments is the fastest benefit I get from WiderAI",
      icon: AiOutlineThunderbolt, // thunder icon
    },
    {
      id: 3,
      title: "Share team inboxes",
      description:
        "It can evaluate my pronunciation and reveal my grammar mistakes and sometimes pronunciation mistakes for my speaking",
      icon: IoShareOutline, // share icon
    },
    {
      id: 4,
      title: "Connect with online",
      description:
        "I can practice my language anywhere by my smartphone, by the way, are you in WiderAI community Chat? let’s connect & practice!",
      icon: RiChatSmile2Line, // share icon
    },
    {
      id: 5,
      title: "Connect the tools you already use",
      description:
        "The most important benefit from WiderAI is about the privacy. I can record my voice and don't be afraid of judgment",
      icon: MdOutlineKeyboardCommandKey, // share icon
    },
    {
      id: 6,
      title: "Our people make the difference",
      description:
        "I get the results within a few seconds. I have used many other apps which take more than two or 3 weeks to analyze our recordings",
      icon: BsChatHeart, // share icon
    },
  ];

  return (
    <section id={id} className="lg:py-[70px] md:py-[50px] py-10">
      <Container>
        <h1 className="text-[#101828] lg:text-[36px] md:text-[28px] text-[24px] font-semibold text-center">
          Benefits Our Users Receive from WiderAI
        </h1>
        <p className="mt-2 text-[#475467] text-center">
          Top things from our user survey in November 2023
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gris-cols-1 md:gap-8 gap-5 md:gap-y-12 lg:mt-[64px] md:mt-[50px] mt-10">
          {benefits.map((benefit) => (
            <div key={benefit.id}>
              <span className="rounded-full bg-[#F4EBFF] flex items-center justify-center h-[48px] w-[48px] border-[8px] border-[#F9F5FF] box-content mx-auto">
                <benefit.icon color="#7F56D9" size={28} />
              </span>
              <h1
                title={benefit.title}
                className="text-center text-[#101828] font-semibold text-[20px] mt-5 line-clamp-1"
              >
                {benefit.title}
              </h1>
              <p className="text-[16px] text-[#475467] mt-2 text-center font-light">
                "{benefit.description}"
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
