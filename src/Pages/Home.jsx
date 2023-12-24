import Typewriter from 'typewriter-effect'
import './Home.css'

export function Home () {
  return (
        <section className='image' id='home'>
            <div className='filterBlack'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div className="about-me">
                        <div className='information'>
                            <h1>Hi, Im <span style={{ color: 'white' }}>Erick</span></h1>
                            <h2>
                                <Typewriter
                                    options={{
                                      strings: ['Computer Science Engineer', 'Fullstack Developer'],
                                      autoStart: true,
                                      loop: true
                                    }}
                                />
                            </h2>
                            <h3>HTML | CSS | JavaScript | React | NodeJS | Express | MongoDB</h3>
                        </div>

                        <div className="profile-image">
                            <img src="https://avatars.githubusercontent.com/u/5464612?v=4" alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
