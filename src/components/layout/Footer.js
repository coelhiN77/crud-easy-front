import { FaHeart } from 'react-icons/fa';
import styles from "../styled/FooterS.module.css";

function Footer() {
  return (
    <footer>
      <p>Created with <FaHeart className={styles.social_list} /> by <span className={styles.span2}>coelhiN</span><span className={styles.span}>Web</span> - &copy; 2023
      </p>
    </footer>
  )
}

export default Footer