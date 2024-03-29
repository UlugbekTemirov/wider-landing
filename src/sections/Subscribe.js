import React from "react";
import Container from "../components/Container";
import { SubcribeButton } from "../components/Buttons";

import peopleHands from "../assets/images/people_shaking_hands.png";

const Subscribe = ({ id }) => {
  return (
    <section id={id} className="mb-5">
      <Container>
        <div className="relative rounded-[10px] bg-[#F9FAFB] shadow-xl flex flex-wrap items-center justify-center ">
          <div className=" md:py-16 py-5 max-w-[1640px] px-2">
            <h1 className="text-[#101828] lg:text-[36px] md:text-[28px] text-[24px] font-semibold text-center">
              Still thinking about it?
            </h1>
            <p className="mt-2 text-[#475467] text-center ">
              Sign up for our newsletter and get{" "}
              <span className="text-[#FF0202]">10%</span> off your next
              purchase.
            </p>

            <form>
              <div className="flex justify-center mt-5 md:flex-row flex-col gap-2">
                <input
                  type="email"
                  className="rounded-[10px] border-[1px] border-[#E2E8F0] md:w-[400px] h-[50px] px-5 outline-none focus:border-[#7F56D9] duration-200 focus:shadow-lg focus:shadow-[#7f56d957] focus:ring-[#7F56D9]"
                  placeholder="Enter your email"
                />
                <SubcribeButton />
              </div>
              <p className="mt-2 text-[#475467]/[0.5] text-center">
                We care about your data in our{" "}
                <a href="/">
                  <span className="underline text-[#FF0202]">
                    privacy policy.
                  </span>
                </a>
              </p>
            </form>
          </div>
          <div className="mb-[-50px]">
            <img src={peopleHands} alt="people_shaking_hands.png" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
