import React from "react";
import Container from "../components/Container";
import avatarSvg from "../assets/images/Avatar.svg";

const Comments = ({ id }) => {
  return (
    <section className="md:my-20 my-10" id={id}>
      <Container>
        <div className="bg-[#F9FAFB] rounded-[10px] px-5 md:py-[50px] py-10">
          <h1 className="text-center text-[#6941C6] text-[14px] mb-3 font-semibold">
            What does it say ?
          </h1>
          <p className=" text-[#101828] md:max-w-[80%] mx-auto font-medium xl:text-[36px] md:text-[30px] text-[20px] text-center md:leading-[44px] mb-5 italic">
            "I used this program to prepare my students for the exam very well
            and improve their knowledge even as if they were in the exam."
          </p>

          <div className="flex flex-col items-center justify-center">
            <img
              src={avatarSvg}
              alt="avatar.svg"
              className="w-[80px] h-[80px] mb-2"
            />
            <h1 className="font-semibold text-[16px] text-[#101828]">
              Mollie Hall
            </h1>
            <p className="text-[#475467] text-[14px]">Teacher , Sisyphus</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Comments;
