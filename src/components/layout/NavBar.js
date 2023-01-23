import { Link } from "react-router-dom";
import { Container } from "../styled/NavBarS";
import logo from "../images/Logo.png";
import { FaUserCircle } from "react-icons/fa"
import styles from "../styled/NavbarS.module.css"

export default function NavBar() {
  return (
    <Container>
      <div>
        <FaUserCircle className={styles.content_ico} />
      </div>

      <div>
        <ul>

          <li>
            <Link to="/" style={{ textDecoration:'none', color:'black'}}>Home</Link>
          </li>

          <li>
            <Link to="/containers" style={{ textDecoration:'none', color:'black'}}>Containers</Link>
          </li>

          <li>
            <Link to="/about" style={{ textDecoration:'none', color:'black'}}>About Me</Link>
          </li>

        </ul>
      </div>
    </Container>
  )
}
