import React from "react";
import Container from "../components/Container";

// partners
import globalbankPng from "../assets/partners/globalbank.png";
import nvidiaPng from "../assets/partners/nvidia.png";
import googlePng from "../assets/partners/google.png";
import lightboxPng from "../assets/partners/lightbox.png";
import spherulePng from "../assets/partners/spherule.png";

const Partners = ({ id }) => {
  const partners = [
    {
      id: 2,
      name: "Global Bank",
      logo: globalbankPng,
    },
    {
      id: 3,
      name: "Nvidia",
      logo: nvidiaPng,
    },
    {
      id: 4,
      name: "Google",
      logo: googlePng,
    },
    {
      id: 5,
      name: "Lightbox",
      logo: lightboxPng,
    },
    {
      id: 6,
      name: "Spherule",
      logo: spherulePng,
    },
  ];
  return (
    <section className="md:my-[50px] my-10" id={id}>
      <Container>
        <div className="bg-[#F9FAFB] md:py-[50px] py-10 rounded-[10px] px-20">
          <h1 className="text-[20px] text-[#475467] text-center font-semibold">
            Partnered with
          </h1>
          <div className="flex md:flex-row flex-col justify-center items-center mt-10 gap-10 overflow-y-auto">
            {partners.map((partner) => (
              <div key={partner.id}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="md:w-full w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
