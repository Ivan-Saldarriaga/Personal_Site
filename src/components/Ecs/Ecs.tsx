
import './ecs.css'
import hauntersImage from '../../assets/swamphaunt.png'
import conImage from '../../assets/swampcon.png'
const Ecs = () => {
    return (
        <>
          <section id='ecs' className='dark'>
            <div className='intro'>
              <h1>Extracurriculars</h1>
              <h2>Here's things I worked on!</h2>
            </div>
            <div className='opportunity'>
              <div className='odd'>
                <div className='about'> 
                  <div className='desc'>
                    <a href="https://gatortped.wixsite.com/home/blue-sky-team" target='_blank'>UF Swamp Haunters</a>
                    <p>As the technical director I facilitated and organized a team of technicians to design immersive effects elevating guest experience. By collaborating with the creative team, the technical team was able to develop and execute to ensure the vision aligned with the overall theme. Also, we innovated and integrated new equipment for animatronics, lighting effects to captivate our over 500 guests</p>                    
                  </div>
                  <img src={hauntersImage} alt="" />
                </div>
              </div>
              <div className='even'>
              <div className='about'> 
                  <img src={conImage} alt="" />
                  <div className='desc'>
                    <a href="http://www.swampcon.org/" target='_blank'>SwampCon</a>
                    
                    <p>As the exhibits chair I sustained faculty and vendor relations, oversaw vendor organization for the university-wide event. Moreover, I communicated with UF’s department of signature events to arrange permits and funding. In all we welcomed and liaised guest-vendor interactions for over 4,000 attendees</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )
}

export default Ecs