import React from "react";
import {
  SlSocialGithub,
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

import "../styles/components/footer.sass";

const Footer = () => {
  const urlGithub = "https://www.github.com/DanielScheffel";
  const urlInstagram = "https://www.instagram.com/o_scheffel.04/";
  const urlLinkedin = "https://www.linkedin.com/in/daniel-scheffel-de-oliveira-0a4135259/";

  return (
    <div className="footer">
      <div className="reserved">© 2023 Scheffel</div>
      <div className="social">
        <a href={urlGithub} target="_blank" rel="noopener noreferrer">
          <SlSocialGithub className="github" />
        </a>
        <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
          <SlSocialInstagram className="github" />
        </a>
        <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
          <SlSocialLinkedin className="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
