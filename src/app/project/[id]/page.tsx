"use client";

import { projectData } from "@/app/data/projectData";
import { useParams } from "next/navigation";

const DetailPage = () => {
  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;
  const currentProject = projectData.find(
    (data) => data.id === parseInt(projectId)
  );

  if (!currentProject) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="max-w-screen-xl h-full p-20 m-auto ">
      <div className="title flex gap-8 items-center justify-between">
        <h1 className="text-[40px] font-semibold">{currentProject.title}</h1>
      </div>
      <div className="project-info flex justify-between">
        <div className="bg-slate-100 w-[450px] h-[600px]"></div>
        <div className="project-description">
          <div key={currentProject.id}>
            <h3>프로젝트 소개</h3>
            <p></p>
            <ul>
              {currentProject.mainFunction.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
