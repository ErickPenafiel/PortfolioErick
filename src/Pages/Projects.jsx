import { Project } from '../components/Project'
import { projects } from '../mocks/projects'
import './Projects.css'

export function Projects () {
  return (
    <main id='projects' className='projects'>
        <div className='list-projects'>
            {
                projects.map(({ image, title, description, web, repository, id }) => {
                  return (
                    <Project image={image} title={title} description={description} web={web} repository={repository} key={id} />
                  )
                })
            }
        </div>
    </main>
  )
}
