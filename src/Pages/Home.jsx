import Typewriter from 'typewriter-effect'
import './Home.css'
import { PdfIcon } from '../components/Icons'
import { useTranslation } from 'react-i18next'

export function Home () {
  const { t } = useTranslation('global')

  return (
    <main className='image' id='home'>
		<div className='filterBlack'></div>

		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<div className="about-me">
					<div className='information'>
							<h1 style={{ fontSize: '3rem' }}>{t('home.title')}</h1>
							<h2 style={{ background: 'radial-gradient(at right center, rgb(56, 189, 248), rgb(49, 46, 129))', backgroundClip: 'text', color: 'transparent', fontSize: '1.7rem' }}>
									<Typewriter options={{ strings: [t('home.subtitle'), t('home.subtitle2')], autoStart: true, loop: true }}
									/>
							</h2>
							<p style={{ fontSize: '1.2rem' }}>
								{t('home.description')}
							</p>

							<div style={{ marginTop: '1rem', display: 'flex' }}>
								<button className='btn-cv'>
									<PdfIcon width='30px' /> CV - Español
								</button>

								<button className='btn-cv' style={{ marginLeft: '0.5rem' }}>
									<PdfIcon width='30px' /> CV - English
								</button>
							</div>
					</div>

					<div className="profile-image">
							<img src="https://avatars.githubusercontent.com/u/5464612?v=4" alt="profile" />
					</div>
				</div>
			</div>
    </main>

  )
}
