
import headshot_img from "../../assets/headshot.jpg";
import resume from "../../assets/resume_saldarriaga_ivan.pdf";
import './About.css'
const About = () => {
    return (
        <section id='about' className='dark'>
            <div className='wrapper'>
                <div className='intro'>
                    <h1>About me</h1>
                    <h2>Hiya! Let me introduce myself.</h2>
                    <div className='items_about'>
                        <img src={headshot_img} alt="" />
                        <div className='summary'>
                            I'm Ivan Saldarriaga, a computer science student yearning to infuse technology with purposeful design. Currently pursuing my Bachelor's in Computer Science (DAS) at the University of Florida, I am driven by the belief that technology should serve as a bridge between functionality and aesthetics by crafting memorable user experiencesthat leave a lasting impression.
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='row' id='info'>
                        <div className='col-6'>
                            <h3>PROFILE</h3>
                            <p>I am currently on the search for any internship opportunities related to software engineering or design. Please contact me via <a href="mailto:ivan.saldarr@gmail.com">ivan.saldarr@gmail.com</a> if you think I'm a good fit for you!</p>
                            <ul className='bio-list'>
                                <li>
                                    <strong>Fullname:</strong>
                                    <span>Ivan Jose Saldarriaga</span>
                                </li>
                                
                                <li>
                                    <strong>Birth Date:</strong>
                                    <span>April 1, 2003</span>
                                </li>
                                
                                <li>
                                    <strong>Email:</strong>
                                    <span>ivan.saldarr@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <h3>SKILLS</h3>
                            <p>Aside from data structures and algorithms, I have also focused my computer science studies on graphics and user-centered design.</p>
                            <ul className='skill-bars'>
                                <li>
                                    <strong> Technical Skills</strong>
                                    <span>C++, Angular, Java, React, HTML, CSS, Git, Matlab and Assembly</span>
                                </li>
                                
                                <li>
                                    <strong>Proficiencies</strong>
                                    <span>Microsoft Visual Studio, MS Suite, Blender, Matlab, Jetbrains</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div className='action-btn'>
                            <a href="#contact" className='hire-me'> Hire me!</a>
                        </div>
                        <div className='action-btn'>
                            <a href={resume} className='hire-me' download> Resume!</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default About