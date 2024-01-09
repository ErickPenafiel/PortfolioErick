import { ButtonNav } from './ButtonNav'
import { GithubIcon, HomeIcon, LanguageIcon, LinkedInIcon, MailIcon, ProjectsIcon, SkillsIcon } from './NavbarIcons'

import './Navbar.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Navbar () {
  const { t, i18n } = useTranslation('global')

  const [tooltipVisibility, setTooltipVisibility] = useState({
    home: false,
    skills: false,
    projects: false,
    contact: false,
    linkedin: false,
    github: false,
    email: false,
    language: false
  })

  const handleMouseEnter = (id) => {
    setTooltipVisibility((prevState) => ({ ...prevState, [id]: true }))
  }

  const handleMouseLeave = (id) => {
    setTooltipVisibility((prevState) => ({ ...prevState, [id]: false }))
  }

  const handleClick = () => {
    console.log('click')
    setTooltipVisibility((prevState) => ({ ...prevState, contact: !prevState.contact, language: !prevState.language }))
  }

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language)
    setTooltipVisibility((prevState) => ({ ...prevState, contact: false, language: false }))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <nav className='nav'>
        <ButtonNav icon={<HomeIcon width={'24px'} />} idSection='home' onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={() => handleMouseLeave('home')} />
        <ButtonNav icon={<SkillsIcon width={'24px'} />} idSection='skills' onMouseEnter={() => handleMouseEnter('skills')} onMouseLeave={() => handleMouseLeave('skills')} />
        <ButtonNav icon={<ProjectsIcon width={'24px'} />} idSection='projects' onMouseEnter={() => handleMouseEnter('projects')} onMouseLeave={() => handleMouseLeave('projects')} />
        {/* <ButtonNav icon={<LanguageIcon width={'24px'} />} idSection='contact' onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={() => handleMouseLeave('contact')} /> */}
        <ButtonNav icon={<LanguageIcon width={'24px'} />}
          idSection='contact'
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={() => handleMouseLeave('contact')}
          onClick={handleClick} />
        <span style={{ backgroundColor: 'white', padding: '5px 0', opacity: '0.5', borderRadius: '5px', margin: '0 1rem', userSelect: 'none' }}>|</span>
        <ButtonNav icon={<LinkedInIcon width={'24px'} />} link='about' onMouseEnter={() => handleMouseEnter('linkedin')} onMouseLeave={() => handleMouseLeave('linkedin')} />
        <ButtonNav icon={<GithubIcon width={'24px'} />} link='https://github.com/ErickPenafiel' onMouseEnter={() => handleMouseEnter('github')} onMouseLeave={() => handleMouseLeave('github')} />
        <ButtonNav icon={<MailIcon width={'24px'} />} link='mailto:penafiel.erick.martin@gmail.com' onMouseEnter={() => handleMouseEnter('email')} onMouseLeave={() => handleMouseLeave('email')} />
      </nav>
      <div className={'tooltips'}>
        <span className={`tooltip 
          ${i18n.language === 'es' ? 'home-tooltip-es' : 'home-tooltip'}
          ${tooltipVisibility.home ? 'visible' : ''}`}>{t('navbar.home')}</span>
        <span className={`tooltip 
          ${i18n.language === 'es' ? 'skills-tooltip-es' : 'skills-tooltip'}
          ${tooltipVisibility.skills ? 'visible' : ''}`}>{t('navbar.skills')}</span>
        <span className={`tooltip 
          ${i18n.language === 'es' ? 'projects-tooltip-es' : 'projects-tooltip'}
          ${tooltipVisibility.projects ? 'visible' : ''}`}>{t('navbar.projects')}</span>
        <span className={`tooltip
          ${i18n.language === 'es' ? 'contact-tooltip-es' : 'contact-tooltip'}
          ${tooltipVisibility.contact ? 'visible' : ''}`}>{t('navbar.language')}</span>
        <div className={`
          ${i18n.language === 'es' ? 'languages-es' : 'languages'} 
          ${tooltipVisibility.language ? 'visible' : ''}`}>
          <button className="btn-languages" onClick={() => handleChangeLanguage('es')} disabled={!tooltipVisibility.language}>
            Español
          </button>
          <button className="btn-languages" onClick={() => handleChangeLanguage('en')} disabled={!tooltipVisibility.language}>
            English
          </button>
        </div>
        <span className={`tooltip 
          ${i18n.language === 'es' ? 'linkedin-tooltip-es' : 'linkedin-tooltip'}
          ${tooltipVisibility.linkedin ? 'visible' : ''}`}>LinkedIn</span>
        <span className={`tooltip 
          ${i18n.language === 'es' ? 'github-tooltip-es' : 'github-tooltip'}
          ${tooltipVisibility.github ? 'visible' : ''}`}>Github</span>
        <span className={`tooltip 
          ${i18n.language === 'es' ? 'email-tooltip-es' : 'email-tooltip'}
          ${tooltipVisibility.email ? 'visible' : ''}`}>Email</span>
      </div>
    </div>
  )
}
