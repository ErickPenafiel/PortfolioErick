export function ContactMe () {
  return (
    <section id='contact'>
        <h2>Contact me</h2>

        <div className='contact'>
            <div className="container-form">
            <form action="" className='form-contact'>
                <div className="input-field">
                <input type="text" />
                <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                <input type="email" />
                <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Escriba el mensaje'></textarea>
                </div>
                <button className='btnSubmit'>
                Send
                </button>
            </form>
            </div>

            <img src="https://avatars.githubusercontent.com/u/5464612?v=4" alt="" />

        </div>
    </section>
  )
}
