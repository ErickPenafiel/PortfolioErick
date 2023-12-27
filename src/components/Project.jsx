import { CssIcon, HtmlIcon, JavaScriptIcon, LaravelIcon } from '../components/Icons'
import { GithubIcon, WebIcon } from '../components/NavbarIcons'

export function Project ({ video, title, tecnologies, description, web, repository }) {
  return (
    <div className="project">
      {/* <img src="https://images.pexels.com/photos/19549721/pexels-photo-19549721/free-photo-of-ciudad-carretera-paisaje-gente.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
      <video loop autoPlay={true} muted>
          <source src={video} type='video/webm' />
      </video>
      <div className='information-project'>
          <p className='project-title'>{title}</p>
          <p className='project-tecnology'><HtmlIcon color='white' width={'20px'} /> <CssIcon color='white' width={'20px'} /> <JavaScriptIcon color='white' width={'20px'} /> <LaravelIcon color='white' width={'20px'} /></p>
          <p className='project-description'>{description}</p>
          <div style={{ textAlign: 'right', paddingRight: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <a href={web} className='btn-project'><WebIcon color='white' width='15px' />Web</a>
              <a href={repository} className='btn-project'><GithubIcon color='white' width='15px' />Repositorio</a>
          </div>
      </div>
  </div>
  )
}
