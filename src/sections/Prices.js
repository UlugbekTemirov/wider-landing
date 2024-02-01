import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Container from "./../components/Container";

const cards = [
  {
    badge: {
      color: "#27497C",
      bg: "#E8EEF7",
      text: "For Starter",
    },
    title: "One-time",
    price: {
      pr: "6000",
      old: "10000",
      text: "usage, pay as you go",
    },
    traffics: [
      "🗣️ 1 Voice Option Available",
      "🔍 Explore Regular Speaking Topics",
      "⏰ 1-Times Mock Exam Access",
      "🎯 Precision in Result Evaluations",
    ],
  },
  {
    badge: {
      color: "#4B264B",
      bg: "#E2D9E2",
      text: "Most Popular",
    },
    title: "Basic",
    price: {
      pr: "20000",
      old: "24000",
      text: "usage. upgrade anytime",
    },
    traffics: [
      "🗣️ Choose from 4 Voices",
      "🌟 Only past authentic IELTS speaking topics",
      "⏰ 4-Times Mock Exam Access",
      "🎯 Precision in Result Evaluations",
    ],
  },
  {
    badge: {
      color: "#78615E",
      bg: "#F2EEEE",
      text: "The Cheapest",
    },
    title: "Standard",
    price: {
      pr: "25000",
      old: "30000",
      text: "usage. upgrade anytime",
    },
    traffics: [
      "🗣️ Choose from 6 Voices",
      "🌟 Past-Future Authentic IELTS speaking topics",
      "⏰ 6-Times Mock Exam Access",
      "🎙️ Realistic Voices",
      "🎯 Precision in Result Evaluations",
    ],
  },
  {
    badge: {
      color: "#78615E",
      bg: "#F2EEEE",
      text: "The Best Ever",
    },
    title: "Premium",
    price: {
      pr: "100000",
      old: "saving +200 000",
      text: "month, paid for 3 month",
    },
    traffics: [
      "🗣️ Choose from 6 Voices",
      "🗓️ ONLY Future Authentic IELTS speaking topics in 6 month",
      "🔄 Infinite Mock Exam Opportunities",
      "🔊 6 Ultra-Realistic Voices",
      "🎯 Precise Result Evaluations with Feedback",
    ],
  },
  {
    badgeBig: {
      color: "#78615E",
      bg: "#F2EEEE",
      text: "Contact us",
    },
    title: "Language Centers",

    traffics: [
      "🗣️ Choose from 10 Voices",
      "🗓️ ONLY Future Authentic IELTS speaking topics in 6 month",
      "🔄 Infinite Mock Exam Opportunities",
      "🔊 6 Ultra-Realistic Voices",
      "💰 More Affordable Than Individual Plans",
      "🎯 Precise Result Evaluations with Feedback",
      "🤝 Personalized Customer Support",
    ],
  },
];

const Prices = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <div className="flex items-center justify-center flex-col gap-5">
          <h1 className="text-[60px] text-[#0A0A0A] font-semibold">
            Pricing made <span className="text-[#FF0202]">simple</span>
          </h1>
          <p className="text-[24px] ">
            Simple pricing to level up your Language
          </p>
          <div className="flex gap-3 items-center justify-center">
            <span>Monthly </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#E6E6E6] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#E6E6E6] dark:peer-focus:ring-blue-800 dark:bg-[#E6E6E6] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-[#E6E6E6] after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <span>3 month</span>
            <span className="bg-[#EED8D8] text-[#761E1E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-[#EED8D8] dark:text-[#761E1E]">
              Most Chosen
            </span>
          </div>
          <div className="flex flex-wrap w-[100%] justify-center items-center gap-5">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#f0f0f0] p-5 w-[max-content] rounded-xl h-[480px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between">
                      <p className="text-[16px] uppercase">plan</p>
                      {card.badge && (
                        <span className="bg-[#EED8D8] text-[#761E1E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-[#EED8D8] dark:text-[#761E1E]">
                          {card.badge.text}
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl text-[#171717] font-semibold">
                      {card.title}
                    </h1>
                    {card.price ? (
                      <div className="flex justify-between items-center my-5">
                        <p>{card.price.pr} UZS</p>
                        <span>
                          <p className="text-[#AA3C3C]  line-through decoration-[#AA3C3C]">
                            {card.price.old} UZS
                          </p>
                          /{card.price.text}.
                        </span>
                      </div>
                    ) : (
                      <p className="bg-[#EED8D8] text-[#761E1E] w-max mx-auto text-2xl font-medium my-5 px-2.5 py-0.5 rounded-lg dark:bg-[#EED8D8] dark:text-[#761E1E]">
                        {card.badgeBig.text}
                      </p>
                    )}

                    <div className="flex flex-col gap-2">
                      {card.traffics.map((traffic, index) => {
                        return (
                          <div className="flex items-center" key={index}>
                            <FaCheckCircle color="#2E735F" />
                            <span>{traffic}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <button className="w-[100%] text-[#f0f0f0] bg-[#FF0202] rounded-lg py-2 ">
                      Get started
                    </button>
                    <p className="text-center">Upgrade or cancel at anytime</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Prices;
