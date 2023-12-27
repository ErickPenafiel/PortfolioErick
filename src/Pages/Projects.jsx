import { CssIcon, HtmlIcon, JavaScriptIcon, LaravelIcon } from '../components/Icons'
import { GithubIcon, WebIcon } from '../components/NavbarIcons'
import { Project } from '../components/Project'
import { projects } from '../mocks/projects'
import './Projects.css'

export function Projects () {
  return (
    <main id='projects' className='projects'>
        <div className='list-projects'>

            {
                projects.map(({ video, title, description, web, repository, id }) => {
                  return (
                    <Project video={video} title={title} description={description} web={web} repository={repository} key={id} />
                  )
                })
            }

            <div className="project">
                <img src="https://images.pexels.com/photos/19478656/pexels-photo-19478656/free-photo-of-nieve-hombre-pareja-mujer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className='information-project'>
                    <p className='project-title'>Administrador Seguridad Industrial</p>
                    <p className='project-tecnology'><HtmlIcon color='white' width={'20px'} /> <CssIcon color='white' width={'20px'} /> <JavaScriptIcon color='white' width={'20px'} /> <LaravelIcon color='white' width={'20px'} /></p>
                    <p className='project-description'>El proyecto consiste en implementar un control de todo en cuanto a seguridad en una industria.</p>
                    <div style={{ textAlign: 'right', paddingRight: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <a href='' className='btn-project'><WebIcon color='white' width='15px' />Web</a>
                        <a href='' className='btn-project'><GithubIcon color='white' width='15px' />Repositorio</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <img src="https://images.pexels.com/photos/19488566/pexels-photo-19488566/free-photo-of-kioto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className='information-project'>
                    <p className='project-title'>Administrador Seguridad Industrial</p>
                    <p className='project-tecnology'><HtmlIcon color='white' width={'20px'} /> <CssIcon color='white' width={'20px'} /> <JavaScriptIcon color='white' width={'20px'} /> <LaravelIcon color='white' width={'20px'} /></p>
                    <p className='project-description'>El proyecto consiste en implementar un control de todo en cuanto a seguridad en una industria.</p>
                    <div style={{ textAlign: 'right', paddingRight: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <a href='' className='btn-project'><WebIcon color='white' width='15px' />Web</a>
                        <a href='' className='btn-project'><GithubIcon color='white' width='15px' />Repositorio</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <img src="https://images.pexels.com/photos/19237996/pexels-photo-19237996/free-photo-of-carretera-bosque-arboles-paisaje.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className='information-project'>
                    <p className='project-title'>Administrador Seguridad Industrial</p>
                    <p className='project-tecnology'><HtmlIcon color='white' width={'20px'} /> <CssIcon color='white' width={'20px'} /> <JavaScriptIcon color='white' width={'20px'} /> <LaravelIcon color='white' width={'20px'} /></p>
                    <p className='project-description'>El proyecto consiste en implementar un control de todo en cuanto a seguridad en una industria.</p>
                    <div style={{ textAlign: 'right', paddingRight: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <a href='' className='btn-project'><WebIcon color='white' width='15px' />Web</a>
                        <a href='' className='btn-project'><GithubIcon color='white' width='15px' />Repositorio</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
