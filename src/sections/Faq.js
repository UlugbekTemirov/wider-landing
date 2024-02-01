import React from "react";
import Container from "../components/Container";
import { AnimatePresence, motion } from "framer-motion";

const Faq = ({ id }) => {
  const [active, setActive] = React.useState(1);

  const faqs = [
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "Absolutely! WiderAI is pleased to offer a one-time free trial that includes full access to our IELTS speaking mock exam simulation. Plus, you'll receive a complimentary 30-minute onboarding call to ensure you're set up for success.",
    },
    {
      id: 2,
      question: "Can I change my plan later?",
      answer:
        "Yes, flexibility is key at WiderAI. You can upgrade or downgrade your plan at any time to find the perfect fit for your study needs.",
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer:
        "WiderAI operates with a hassle-free cancellation policy. You can cancel your subscription at any time with no additional charges, and your access will continue until the end of the current billing period.",
    },
    {
      id: 4,
      question: "Is there any rewards or bonuses for refarrals?",
      answer:
        "WiderAI offers a rewarding referral program. When you refer friends or colleagues to our platform, both you and your referrals receive bonus study time after they sign up for a paid plan. It's our way of saying thank you for spreading the word about WiderAI.",
    },
    {
      id: 5,
      question: "How does billing work?",
      answer:
        "After your free trial, if you choose to continue, we'll bill you on a monthly or yearly basis depending on the subscription plan you select. Billing occurs at the beginning of each cycle, and you'll receive an email reminder before each payment is due.",
    },
    {
      id: 6,
      question: "How do I change my account email?",
      answer:
        "You can change your account email at any time through the settings in your WiderAI account. If you need any assistance, our customer support team is just an email away.",
    },
  ];

  return (
    <section id={id} className="lg:py-[70px] md:py-10 py-5">
      <Container>
        <h1 className="text-[#101828] lg:text-[36px] md:text-[28px] text-[24px] font-semibold text-center">
          Frequently asked questions
        </h1>
        <p className="mt-2 text-[#475467] text-center">
          Everything you need to know about the product and billing.
        </p>

        <div className="max-w-[768px] mx-auto md:mt-[50px] mt-5">
          {faqs.map((faq) => (
            <div
              onClick={() => {
                active === faq.id ? setActive(null) : setActive(faq.id);
              }}
              key={faq.id}
              className={`flex p-8 gap-6 hover:bg-[#F9FAFB] ${
                faq.id === active ? "bg-[#F9FAFB]" : null
              } cursor-pointer rounded-lg overflow-hidden duration-300`}
            >
              <div>
                <span className="w-[24px] h-[24px] border-2 border-[#FF0202] box-content relative flex justify-center items-center rounded-full hover:scale-105 duration-300 cursor-pointer">
                  <span
                    className={`h-[14px] ${
                      active === faq.id ? "rotate-[270deg]" : ""
                    } w-[2.5px] rounded-lg duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF0202]`}
                  />
                  <span className="w-[14px] h-[2.5px] rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF0202]" />
                </span>
              </div>

              <div>
                <h1 className="text-[#101828] text-[18px] font-medium">
                  {faq.question}
                </h1>
                <AnimatePresence>
                  {active === faq.id && (
                    <motion.p
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="text-[#475467] font-normal text-[16px] md:leading-[24px] mt-2"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
