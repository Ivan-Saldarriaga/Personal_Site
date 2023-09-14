
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          <nav>
            {/* unordered list <ul> */}
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#info">Resume</a>
              </li>
              <li>
                <a href="#activities">Projects</a>
              </li>
              <li>
                <a href="#ecs">Activities</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </>
      )
}

export default Navbar