import { useTranslation } from 'react-i18next'
import { SkillCategory } from '../components/SkillCategory'
import { backend, frontend, programmingLanguages, versionControl } from '../constants/skills'
import './Skills.css'

export function Skills () {
  const { t } = useTranslation('global')

  return (
    <main id='skills' className='skills'>
      <div className='skills-container'>
        <SkillCategory name={t('skills.programming')} skills={programmingLanguages} />
        <SkillCategory name={'Frontend'} skills={frontend} />
        <SkillCategory name={'Backend'} skills={backend} />
        <SkillCategory name={t('skills.versionControl')} skills={versionControl} />
      </div>
    </main>
  )
}
