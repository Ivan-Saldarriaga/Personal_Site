
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import './Contact.css'
const Contact = () => {
    return (
        <>
          <section id='contact' className='white'>
            <div className='intro'>
              <h1>Contact</h1>
              <h2>I'd love to hear from you!</h2>
            </div>
            <div className='opportunity'>
              <ul className='opp_list'>
                <li>
                  <img src={email} alt="" />
                  <strong>Email me at:</strong>
                  <span><a href="mailto:ivan.saldarr@gmail.com">ivan.saldarr@gmail.com</a></span>
                </li>
                <li>
                  <img src={linkedin} alt="" />
                  <strong>Let's Connect:</strong>
                  <span><a href="https://www.linkedin.com/in/ivan-saldarriaga/" target="_blank">LinkedIn Profile</a></span>
                </li>
              </ul>
            </div>
          </section>
        </>
      )
}

export default Contact