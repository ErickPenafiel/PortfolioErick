import { Skill } from './Skill'
import './SkillCategory.css'

export function SkillCategory ({ name, skills }) {
  return (
    <div className="category">
        <h3>{name}</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
            {
                skills.map((skill) => (
                    <Skill key={skill.id} name={skill.name} icon={skill.icon} />
                ))
            }
        </div>
    </div>
  )
}
