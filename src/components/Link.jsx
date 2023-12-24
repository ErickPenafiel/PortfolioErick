import { useNavigate, useLocation } from 'react-router-dom'

export const Link = ({ to, children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClicked = () => {
    const bars = document.getElementById('bars')

    bars?.classList.add('show')

    setTimeout(() => {
      bars?.classList.remove('show')
      bars?.classList.add('hide')
      navigate(to)
    }, 800)

    setTimeout(() => bars?.classList.remove('hide'), 1600)
  }

  return (
        <a
            className={
                location.pathname.includes(children?.toString().toLowerCase())
                  ? 'active'
                  : ''
            }
            onClick={handleClicked}
        >
            {children}
        </a>
  )
}
