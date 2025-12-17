import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <section id='social-links'>
        <ul>
          <li>
            <a
              href='https://github.com/farihapromi/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/fariha-promi-b5baa619b/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href='https://discord.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>
          <li>
            <a href='mailto:farihapromi2611@email.com'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </section>
      <p>Fariha Promi &copy; 2024, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
