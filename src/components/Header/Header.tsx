
import './Header.css'
import Navbar from '../Navbar/Navbar'
const Header = () => {
    return (
        <header>
            <div className='wrapper' id='header'>
                <Navbar />
                <div className='cta'>
                    <p className='welcome-statement'>
                        Ivan Saldarriaga
                    </p>
                    <h1>Designer|Software Engineer</h1>
                </div>
            </div>
        </header>
      )
}

export default Header