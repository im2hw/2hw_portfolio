"use client";
import Link from "next/link";
import { projectData } from "../data/projectData";
const ProjectPage = () => {
  return (
    <div
      className="max-w-screen-xl h-[100vh] p-20 m-auto border-b-2 border-[#eee]"
      id="project"
    >
      <h1 className="text-[40px] font-semibold text-center">PROJECT</h1>
      <p className="text-center text-sm text-[#666] mt-2">
        프로젝트는 최신순으로 정렬되어있습니다.
      </p>
      <div className="grid grid-cols-2 w-[900px] h-[600px] m-auto p-4 mt-4 justify-center items-center">
        {projectData.map((data) => {
          return (
            <Link
              href={`/project/${data.id}`}
              className="project w-[420px]"
              key={data.id}
            >
              <div
                className={`effect w-[420px] h-64 p-6 flex flex-col justify-between gap-4`}
              >
                <div className="flex flex-col justify-start items-start">
                  <h3 className="title font-semibold text-[20px]">
                    {data.title}
                  </h3>
                  <span className="date text-xs">{data.date}</span>
                </div>
                <p className="text-sm">{data.description}</p>
                <p className="flex flex-col text-sm">
                  <span className="font-semibold text-">사용 기술</span>
                  {data.skill}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
