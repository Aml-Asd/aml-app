import Card from "./Card";
 import "./index.css";
function ProjectList({ numberOfProjects }) {
  // بيانات افتراضية للمشاريع
  const projects = Array.from({ length: numberOfProjects }, (_, index) => ({
    id: index + 1,
    title: `Project ${index + 1}`,
    students: [`Student A${index + 1}`, `Student B${index + 1}`],
    link: `https://example.com/project${index + 1}`
  }));

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <Card
          key={project.id}
          projectTitle={project.title}
          students={project.students}
          projectLink={project.link}
        />
      ))}
    </div>
  );
}

export default projectlist;
