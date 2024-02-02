import React from "react";
import { StartNowSmallButton } from "../components/Buttons";
import Container from "../components/Container";

// assets
import iphone1 from "../assets/images/01.svg.png";
import iphone2 from "../assets/images/02.svg.png";
import iphone3 from "../assets/images/03.svg.png";

const Potential = ({ id }) => {
  return (
    <section className="lg:my-[70px] md:my-10 my-5" id={id}>
      <Container>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <div className="lg:col-span-6 md:col-span-5 flex flex-1 justify-center">
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
              <div>
                <StartNowSmallButton />
              </div>
            </div>
          </div>
          <div className="flex flex-4 flex-row max-w-[930px] gap-5 flex-wrap items-center justify-center">
            <div>
              <img src={iphone1} alt="01.svg.png" />
            </div>
            <div>
              <img src={iphone2} alt="02.svg.png" />
            </div>
            <div>
              <img src={iphone3} alt="03.svg.png" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Potential;
