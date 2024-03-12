import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between w-full border-b-2 border-[#666] text-black p-6 fixed backdrop-blur-sm z-10">
      <Link href={"/"}>
        <h1 className="text-lg font-semibold">im2hw</h1>
      </Link>
      <ul className="flex gap-10 justify-center items-center text-sm">
        <Link href={"#about"}>ABOUT</Link>
        <Link href={"#skill"}>SKILL</Link>
        <Link href={"#project"}>PROJECT</Link>
        <Link href={"#contact"}>CONTACT</Link>
      </ul>
    </div>
  );
};

export default Header;
