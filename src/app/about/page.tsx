import Image from "next/image";

const AboutPage = () => {
  return (
    <div
      className="max-w-screen-xl h-[100vh] p-20 m-auto border-b-2 border-[#eee]"
      id="about"
    >
      <div className="profile flex items-center justify-evenly mt-8">
        <div>
          <Image
            src={"/image/gradient.jpg"}
            alt="img"
            width={0}
            height={0}
            style={{ width: "400px", height: "550px" }}
          ></Image>
        </div>
        <div className="flex flex-col justify-between  h-[400px]">
          <h1 className="text-[40px] font-semibold">ABOUT</h1>
          <h2 className="text-[28px] font-medium">
            이희원 <span className="text-[#6a6a6a]">LEE HEEWON</span>
          </h2>
          <p className="text-[24px] font-semibold">
            <span className="text-[#36A5FF]">
              타고난 관찰력으로 UX를 개발하는,
              <br />
            </span>{" "}
            프론트엔드 개발자
          </p>

          <ul className=" line leading-8  text-md ">
            <span className="text-sm text-[#666] font-semibold">
              저는 이런 사람 입니다!
            </span>
            <li>
              1. 다양한 직군과의 협업으로 지식을 습득하는 것을 좋아합니다.
            </li>
            <li>
              2. 새로운 기술에 대한 주도적인 학습을 좋아하고, 도전을 즐깁니다.
            </li>
            <li>
              3. 창의적인 아이디어로 새로운 관점에서 사용자 경험을 개발하고자
              합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
