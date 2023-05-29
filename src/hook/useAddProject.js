import { useContext } from 'react';
import ProjectsService from '../services/projects.service';
import { projectsContext } from '../context/projects.context';

export function useAddProject({
  title,
  description,
  secDescription,
  urlGit,
  technologies,
  image,
}) {
  const projectService = new ProjectsService();
  const { getProjects } = useContext(projectsContext);

  const handleProject = (e) => {
    e.preventDefault();
    projectService
      .addProject({
        title,
        description,
        secDescription,
        urlGit,
        technologies,
        image,
      })
      .then((result) => {
        getProjects();
      })
      .catch((err) => console.log(err));
  };

  return { handleProject };
}
