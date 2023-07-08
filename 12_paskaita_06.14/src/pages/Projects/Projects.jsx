import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getProjects } from "../../api/projects";
import ProjectCard from "./ProjectCard";
import { PROJECT_ROUTE } from "../../routes/const";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>There are no projects yet.</div>;
  }

  return (
    <div className="projects">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={generatePath(PROJECT_ROUTE, { id: project.id })} // generatePath tik tada kai naudojam dinaminius routus
          className="single-project"
        >
          <ProjectCard title={project.title} imageUrl={project.imageUrl} />
        </Link>
      ))}
    </div>
  );
};

export default Projects;