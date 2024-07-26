import { Project } from '../components/Project'
import './Projects.css'
import { useTranslation } from 'react-i18next'

export function Projects () {
  const { t, ready } = useTranslation('projects', { useSuspense: false })

  if (!ready) return 'Loading...'
  const projects = t('projects', { returnObjects: true })

  return (
    <main id='projects' className='projects'>
      <div className='list-projects'>
        {
          projects.map(({ movie, title, tecnologies, description, web, repository, id }) => {
            return (
              <Project
                movie={movie}
                title={title}
                tecnologies={tecnologies}
                description={description}
                web={web}
                repository={repository}
                key={id} />
            )
          })
        }
      </div>
    </main>
  )
}
