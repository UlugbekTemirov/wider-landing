import React from "react";
import { StartNowSmallButton } from "../components/Buttons";
import Container from "../components/Container";

// assets
import onlineEducationPng from "../assets/images/Online_education.png";
import onlineEducationPng1 from "../assets/images/Online_education_1.png";
import onlineEducationPng2 from "../assets/images/Online_education_2.png";
import onlineEducationPng3 from "../assets/images/Online_education_3.png";
import onlineEducationPng4 from "../assets/images/Online_education_4.png";

const Potential = ({ id }) => {
  return (
    <section className="lg:my-[70px] md:my-10 my-5" id={id}>
      <Container>
        <div className="md:grid md:grid-cols-10 gap-5">
          <div className="lg:col-span-6 md:col-span-5 flex flex-col justify-center">
            <div>
              <h1 className="text-[#101828] md:text-[48px] text-[28px] font-semibold md:text-left text-center">
                Unlock Your English Potential
              </h1>
              <p className="text-[#475467] md:mt-3 mt-2 mb-5 leading-[30px] md:max-w-[80%] md:text-left text-center">
                WiderAI is the perfect solution for anyone looking to speak
                English confidently. With your personal AI English Speaking
                Coach, you can estimate your English level, identify strengths
                and weaknesses, and improve your vocabulary and grammar, or
                receive tailored accurate Feedback.
              </p>
              <div className="flex justify-center md:justify-start">
                <StartNowSmallButton />
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-5 md:flex flex-col gap-4 hidden">
            <div className="flex justify-center items-baseline gap-4">
              <img src={onlineEducationPng1} alt="online_education.png" />
              <img src={onlineEducationPng} alt="online_education_1.png" />
            </div>
            <div className="flex justify-center items-start gap-4">
              <img src={onlineEducationPng4} alt="online_education.png" />
              <img src={onlineEducationPng3} alt="online_education_1.png" />
              <img src={onlineEducationPng2} alt="online_education_1.png" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Potential;
