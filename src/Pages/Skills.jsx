import { useTranslation } from 'react-i18next'
import { SkillCategory } from '../components/SkillCategory'
import { backend, frontend, programmingLanguages, versionControl } from '../constants/skills'
import './Skills.css'

export function Skills () {
  const { t } = useTranslation('global')

  return (
    <main id='skills' className='skills'>
      <div className="skills-description">
        <h2>{t('skills.title')}</h2>

        <ul>
          <li>
            <p>{t('skills.description1')}</p>
          </li>
          <li>
            <p>{t('skills.description2')}</p>
          </li>
          <li>
            <p>{t('skills.description3')}</p>
          </li>
          <li>
            <p>{t('skills.description4')}</p>
          </li>
          <li>
            <p>{t('skills.description5')}</p>
          </li>
          <li>
            <p>{t('skills.description6')}</p>
          </li>
        </ul>
      </div>

      <div className='skills-container'>
        <SkillCategory name={t('skills.programming')} skills={programmingLanguages} />
        <SkillCategory name={'Frontend'} skills={frontend} />
        <SkillCategory name={'Backend'} skills={backend} />
        <SkillCategory name={t('skills.versionControl')} skills={versionControl} />
      </div>

    </main>
  )
}
