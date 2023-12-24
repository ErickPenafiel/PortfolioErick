import { SkillCategory } from '../components/SkillCategory'
import { backend, frontend, programmingLanguages, versionControl } from '../constants/skills'
import './Skills.css'

export function Skills () {
  return (
    <main id='skills' className='skills'>

        <div className='skills-container'>
            <SkillCategory name={'Programming Languages'} skills={programmingLanguages} />
            <SkillCategory name={'Frontend'} skills={frontend} />
            <SkillCategory name={'Backend'} skills={backend} />
            <SkillCategory name={'Version Control'} skills={versionControl} />
        </div>
    </main>
  )
}
