import { GithubIcon, WebIcon } from '../components/NavbarIcons'
import './Project.css'
import { TechList } from './TechList'

export function Project ({ movie, title, tecnologies, description, web, repository }) {
  return (
    <div className="project">
      <video loop autoPlay={true} muted>
          <source src={movie} type='video/webm' />
      </video>
      <div className='information-project'>
          <p className='project-title'>{title} HOla</p>
          <p className='project-description'>{description}</p>

          <TechList techs={tecnologies} />
          <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            {
              web && <a href={web} target='_blank' className='btn-project' style={{
                backgroundColor: '#334c9a'
              }} rel="noreferrer"><WebIcon color='white' width='15px' />Web</a>
            }
              <a href={repository} target='_blank' className='btn-project' style={{
                backgroundColor: '#000'
              }} rel="noreferrer"><GithubIcon color='white' width='15px' />Repositorio</a>
          </div>
      </div>
  </div>
  )
}
