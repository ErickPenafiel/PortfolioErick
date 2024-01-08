import { Project } from '../components/Project'
import { projects } from '../mocks/projects.js'
import './Projects.css'

export function Projects () {
  return (
    <main id='projects' className='projects'>
        <div className='list-projects'>
            {
                projects.map(({ movie, title, description, web, repository, id }) => {
                  return (
                    <Project movie={movie} title={title} description={description} web={web} repository={repository} key={id} />
                  )
                })
            }
        </div>
    </main>
  )
}
