import { AiOutlinePlayCircle } from "react-icons/ai";

export const SignUpButton = ({ onClick }) => (
  <button
    className="text-white bg-[#FF0202] hover:bg-[#ff4a4a] duration-200 md:px-[18px] px-3 md:py-[10px] py-[7px] font-medium rounded-lg text-[16px] active:scale-95"
    onClick={onClick}
  >
    Sign Up
  </button>
);

export const LoginButton = ({ onClick }) => (
  <button
    className="text-[#0A0812] hover:bg-[#7f56d917] duration-200 md:px-[18px] px-3 md:py-[10px] py-[7px] font-medium rounded-lg text-[16px] active:scale-95"
    onClick={onClick}
  >
    Log in
  </button>
);

export const DemoButton = ({ onClick }) => (
  <button
    className="text-[#344054] flex items-center gap-2 bg-white duration-200 md:px-[28px] px-5 md:py-[16px] py-[10px] font-medium rounded-lg text-[16px] active:scale-95"
    onClick={onClick}
  >
    <AiOutlinePlayCircle size={24} />
    Demo
  </button>
);

export const StartNowButton = ({ onClick }) => (
  <button
    className="text-white bg-[#FF0202] hover:bg-[#ff4a4a] duration-200 md:px-[28px] px-5 md:py-[16px] py-[10px] font-medium rounded-lg text-[16px] active:scale-95"
    onClick={onClick}
  >
    Start Now
  </button>
);

export const StartNowSmallButton = ({ onClick }) => (
  <button
    className="text-white bg-[#FF0202] hover:bg-[#ff4a4a] duration-200 md:px-[20px] px-4 md:py-[12px] py-[8px] font-medium rounded-lg text-[16px] active:scale-95"
    onClick={onClick}
  >
    Start Now
  </button>
);

export const SubcribeButton = ({ onClick, type = "submit" }) => (
  <button
    onClick={onClick}
    type={type}
    className="rounded-[10px] bg-[#FF0202] text-white font-semibold px-5 h-[50px] active:scale-95 duration-200"
  >
    Subscribe
  </button>
);
