
import './Activities.css'
import hangmanHelperImage from '../../assets/hangmanHelper.png'
import siteImage from '../../assets/site.png'
import sproutsImage from '../../assets/sprouts.png'
const Activities = () => {
    return (
        <section id='activities' className='white'>
            <div className='wrapper'>
                <div className='intro'>
                    <h1>Projects</h1>
                    <h2>Here's things I worked on!</h2>
                </div>
                <div className='content-container'>
                    <div className='projects'>
                        <a href="https://github.com/wavesdog470/Wavid-Bowman_Professional/tree/main/Team/Word%20Sort%20Hangman" target='_blank'>
                            <img src={hangmanHelperImage} alt="" />
                        </a>
                    </div>
                    <div className='projects'>
                        <a href='https://github.com/blake-budd1/Group54' target='_blank'>
                            <img src={sproutsImage} alt="" />
                        </a>
                    </div>
                    <div className='projects'>
                        <a href='https://github.com/KleptoKiddo/P_Site' target='_blank'>
                            <img src={siteImage} alt="" />
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Activities