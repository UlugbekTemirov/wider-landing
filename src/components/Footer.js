import React from "react";
import Container from "./Container";

import { FaInstagram, FaTelegram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      id: "instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/widerai/",
    },
    {
      id: "telegram",
      icon: FaTelegram,
      link: "https://t.me/widerai",
    },
    {
      id: "youtube",
      icon: FaYoutube,
      link: "https://www.youtube.com/channel/UCQXQ3QZHoA0ZJ7j7X6ZQ4jQ",
    },
    {
      id: "twitter",
      icon: FaTwitter,
      link: "https://twitter.com/widerai",
    },
  ];

  return (
    <section id="footer" className="bg-[#F9FAFB] h-[120px] flex items-center">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-[#667085] text-[16px] font-normal">
            {currentYear} &copy; WiderAI Inc.
          </h1>

          <div className="flex gap-5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#667085] hover:text-[#7F56D9] duration-200"
                >
                  <Icon className="w-[24px] h-[24px]" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
