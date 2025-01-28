import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../css-files/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-icons">
          <Link href="https://www.facebook.com/profile.php?id=100083407571080" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/mubashirkhi72/?next=%2F" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-mubashir-saeedi/" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        </div>
        <p className="footer-text">&copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
