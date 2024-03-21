import "@/styles/global.css";
import Introduce from "@/components/Introduce";
import WorkExperience from "@/components/WorkExperience";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
export default function Home() {
  return (
    <>
      <Introduce />
      <WorkExperience />
      <Project />
      <Skill />
    </>
  );
}
