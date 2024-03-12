"use client";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-container w-7 h-7 bg-white ">
      <button id="top" onClick={scrollToTop} type="button">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default TopButton;
