import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiVelog } from "react-icons/si";

const ContactPage = () => {
  return (
    <div className=" text-black w-full h-[100vh]" id="contact">
      <div className="max-w-screen-xl h-full p-20 m-auto  flex flex-col justify-between">
        <div className="title flex flex-col gap-8 m-auto items-center p-2 border-y-2 border-black w-48">
          <p className="text-lg text-black tracking-[5px] font-semibold ">
            CONTACT ME
          </p>
        </div>
        <div className=" h-[450px] w-[800px] grid grid-cols-2 items-center justify-center m-auto">
          <ul className="text-center flex flex-col items-center gap-2">
            <li>
              <FaPhone className="w-8 h-8" />
            </li>
            <li className="text-lg font-semibold">Phone</li>
            <li>010-2112-3279</li>
          </ul>
          <ul className="text-center flex flex-col items-center gap-2">
            <li>
              <IoIosMail className="w-10 h-10" />
            </li>
            <li className="text-lg font-semibold">E-Mail</li>
            <li>julisanta01@naver.com</li>
          </ul>
          <ul className="text-center flex flex-col items-center gap-2">
            <li>
              <FaGithub className="w-8 h-8" />
            </li>
            <li className="text-lg font-semibold">Github</li>
            <Link href={"https://github.com/im2hw"}>
              https://github.com/im2hw
            </Link>
          </ul>
          <ul className="text-center flex flex-col items-center gap-2">
            <li>
              <SiVelog className="w-8 h-8" />
            </li>
            <li className="text-lg font-semibold">Velog</li>
            <Link href={"https://velog.io/@im2hw/posts"}>
              https://velog.io/@im2hw/posts
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
