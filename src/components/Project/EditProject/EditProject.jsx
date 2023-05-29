import { useState } from 'react';
import { useField } from '../../../hook/useField';
import '../FormProject.css';
import { useEdit } from '../../../hook/useEditProject';

export default function EditProject({ project }) {
  const title = useField({ type: 'text', field: project.title });
  const description = useField({ type: 'text', field: project.description });
  const secDescription = useField({
    type: 'text',
    field: project.secDescription,
  });
  const urlGit = useField({ type: 'text', field: project.urlGit });
  // const [image, setImage] = useState(project.image);
  const [techAux, setTechAux] = useState('');

  const handleTech = (e) => {
    e.preventDefault();
    project.technologies.push(techAux);
    setTechAux('');
  };

  const { handleEdit } = useEdit({
    projectId: project._id,
    title: title.value,
    description: description.value,
    secDescription: secDescription.value,
    urlGit: urlGit.value,
    technologies: project.technologies,
    image: project.image,
  });

  return (
    <section className='section__edit'>
      <form className='project__form' onSubmit={handleEdit}>
        <fieldset>
          <input {...title} required />
        </fieldset>
        <fieldset>
          <textarea {...description} required />
        </fieldset>
        <fieldset>
          <textarea {...secDescription} required />
        </fieldset>
        <fieldset>
          <input {...urlGit} required />
        </fieldset>
        {/* <fieldset>
          <input {...image} required />
        </fieldset> */}
        {project.technologies.map((tech, i) => (
          <fieldset key={i} className='fieldset__tech'>
            <p>{tech}</p>
            <p
              onClick={() => {
                project.technologies.splice(i, 1);
              }}
              className='btnn btn__form'
            >
              delete
            </p>
          </fieldset>
        ))}
        <button className='btnn btn__form'>Actualizar proyecto</button>
      </form>
      <form className='project__form' onSubmit={handleTech}>
        <fieldset>
          <input
            type='text'
            value={techAux}
            onChange={(e) => setTechAux(e.target.value)}
          />
        </fieldset>
        <button className='btnn btn__form'>Agregar tecnologia</button>
      </form>
    </section>
  );
}
