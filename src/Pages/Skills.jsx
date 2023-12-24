import { SkillCategory } from '../components/SkillCategory'
import { backend, frontend, programmingLanguages, versionControl } from '../constants/skills'
import './Skills.css'

export function Skills () {
  return (
    <section id='skills' className='skills'>
        <h2 style={{ marginBottom: '2rem' }}>Skills</h2>

        <div className='skills-container'>
            <SkillCategory name={'Programming Languages'} skills={programmingLanguages} />
            <SkillCategory name={'Frontend'} skills={frontend} />
            <SkillCategory name={'Backend'} skills={backend} />
            <SkillCategory name={'Version Control'} skills={versionControl} />
        </div>
    </section>
  )
}
