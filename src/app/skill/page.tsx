const SkillPage = () => {
  const skillTree = [
    {
      title: "Language",
      skill: "HTML, CSS, JavaScript, TypeScript",
    },
    {
      title: "Library & FrameWork",
      skill: "React, Redux, React-Query, Next.js",
    },
    {
      title: "Database",
      skill: "Firebase, Supabase",
    },
    {
      title: "Deployment",
      skill: "Vercel",
    },
    {
      title: "Collaborations",
      skill: "Notion, Slack, Figma, Git, Github",
    },
    {
      title: "Styling",
      skill: "Tailwind CSS, BootStrap, MUI, Styled-Components",
    },
  ];
  return (
    <div
      className=" text-black w-full h-[100vh] border-b-2 border-[#eee]"
      id="skill"
    >
      <div className="max-w-screen-xl h-full p-20 m-auto ">
        <div className="title flex gap-8 items-center justify-center">
          <h1 className="text-[40px] font-semibold">SKILL</h1>
        </div>
        <div className="skill-se h-[500px] grid grid-cols-2 mt-10 ">
          {skillTree.map((item) => {
            return (
              <div
                key={item.title}
                className="w-[350px] h-36 m-auto text-center p-4"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
