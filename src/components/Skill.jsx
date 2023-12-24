import './Skill.css'

export function Skill ({ icon, name }) {
  return (
    <div className='skill'>
      <div style={{ width: '100%' }}>
        {icon}
      </div>
      <p>{name}</p>
    </div>
  )
}
