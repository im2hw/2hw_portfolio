import Eye from "./_components/Eye";

const HomePage = () => {
  return (
    <div className=" w-full h-[100vh] text-black border-b-2 border-[#eee]">
      <div className="max-w-screen-xl h-full m-auto p-10 flex flex-col items-center justify-evenly">
        <div className="w-full h-[600px] flex gap-10 items-center justify-center">
          <div className="introduce w-full flex items-center justify-between ">
            <p className="text-xl font-semibold">
              사용자의 눈으로 세상을 바라보고
            </p>
            <Eye />
            <p className="text-xl font-semibold">
              더 나은 UX를 생각하는 개발자
            </p>
          </div>
        </div>
        <div className="title-wrapper w-full flex gap-8 items-center justify-center text-lg tracking-[5px]">
          <h3>FRONT END DEVELOPER</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
