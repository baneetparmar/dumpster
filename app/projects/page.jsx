import projectCard from "@/components/projectCard";
import sampleData from "@/sampledata/projectlist";
function Projects() {
  return (
    <div className="flex flex-row flex-wrap mt-20 p-10 justify-center content-center gap-x-10 gap-y-4">
      {sampleData.map((project, index) => projectCard({ ...project }, index))}
    </div>
  );
}
export default Projects;
