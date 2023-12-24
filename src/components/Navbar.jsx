import { ButtonNav } from './ButtonNav'
import { ContactIcon, GithubIcon, HomeIcon, LinkedInIcon, MailIcon, ProjectsIcon, SkillsIcon } from './NavbarIcons'

import './Navbar.css'
import { useState } from 'react'

export function Navbar () {
  const [tooltipVisibility, setTooltipVisibility] = useState({
    home: false,
    skills: false,
    projects: false,
    contact: false,
    linkedin: false,
    github: false,
    email: false
  })

  const handleMouseEnter = (id) => {
    setTooltipVisibility((prevState) => ({ ...prevState, [id]: true }))
  }

  const handleMouseLeave = (id) => {
    setTooltipVisibility((prevState) => ({ ...prevState, [id]: false }))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <nav className='nav'>
        <ButtonNav icon={<HomeIcon color='white' width={'24px'} />} idSection='home' onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={() => handleMouseLeave('home')} />
        <ButtonNav icon={<SkillsIcon color='white' width={'24px'} />} idSection='skills' onMouseEnter={() => handleMouseEnter('skills')} onMouseLeave={() => handleMouseLeave('skills')} />
        <ButtonNav icon={<ProjectsIcon color='white' width={'24px'} />} idSection='projects' onMouseEnter={() => handleMouseEnter('projects')} onMouseLeave={() => handleMouseLeave('projects')} />
        <ButtonNav icon={<ContactIcon color='white' width={'24px'} />} idSection='contact' onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={() => handleMouseLeave('contact')} />
        <span style={{ backgroundColor: 'white', padding: '5px 0', opacity: '0.5', borderRadius: '5px', margin: '0 1rem', userSelect: 'none' }}>|</span>
        <ButtonNav icon={<LinkedInIcon color='white' width={'24px'} />} link='about' onMouseEnter={() => handleMouseEnter('linkedin')} onMouseLeave={() => handleMouseLeave('linkedin')} />
        <ButtonNav icon={<GithubIcon color='white' width={'24px'} />} link='https://github.com/ErickPenafiel' onMouseEnter={() => handleMouseEnter('github')} onMouseLeave={() => handleMouseLeave('github')} />
        <ButtonNav icon={<MailIcon color='white' width={'24px'} />} link='mailto:penafiel.erick.martin@gmail.com' onMouseEnter={() => handleMouseEnter('email')} onMouseLeave={() => handleMouseLeave('email')} />
      </nav>
      <div className='tooltips'>
        <span className={`tooltip ${tooltipVisibility.home ? 'visible' : ''}`}>Home</span>
        <span style={{ left: '5px' }} className={`tooltip ${tooltipVisibility.skills ? 'visible' : ''}`}>Skills</span>
        <span style={{ left: '4px' }} className={`tooltip ${tooltipVisibility.projects ? 'visible' : ''}`}>Projects</span>
        <span style={{ left: '-5px' }} className={`tooltip ${tooltipVisibility.contact ? 'visible' : ''}`}>Contact</span>
        <span className='tooltip'>|</span>
        <span style={{ left: '2px' }} className={`tooltip ${tooltipVisibility.linkedin ? 'visible' : ''}`}>LinkedIn</span>
        <span style={{ left: '-6px' }} className={`tooltip ${tooltipVisibility.github ? 'visible' : ''}`}>Github</span>
        <span style={{ left: '-6px' }} className={`tooltip ${tooltipVisibility.email ? 'visible' : ''}`}>Email</span>
      </div>
    </div>
  )
}
