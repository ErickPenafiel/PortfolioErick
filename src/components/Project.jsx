import { CssIcon, HtmlIcon, JavaScriptIcon, LaravelIcon } from '../components/Icons'
import { GithubIcon, WebIcon } from '../components/NavbarIcons'

export function Project ({ movie, title, tecnologies, description, web, repository }) {
  return (
    <div className="project">
      {/* <img src={image} alt="" /> */}
      <video loop autoPlay={true} muted>
          <source src={movie} type='video/webm' />
      </video>
      <div className='information-project'>
          <p className='project-title'>{title}</p>
          <p className='project-tecnology'><HtmlIcon color='white' width={'20px'} /> <CssIcon color='white' width={'20px'} /> <JavaScriptIcon color='white' width={'20px'} /> <LaravelIcon color='white' width={'20px'} /></p>
          <p className='project-description'>{description}</p>
          <div style={{ textAlign: 'right', paddingRight: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            {
              web && <a href={web} target='_blank' className='btn-project' rel="noreferrer"><WebIcon color='white' width='15px' />Web</a>
            }
              <a href={repository} target='_blank' className='btn-project' rel="noreferrer"><GithubIcon color='white' width='15px' />Repositorio</a>
          </div>
      </div>
  </div>
  )
}
