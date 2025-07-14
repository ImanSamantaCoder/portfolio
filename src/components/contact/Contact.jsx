import React from "react";

import styles from "./Contact.module.css";
import  getImageUrl  from "../../utils"

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:iman.samanta.code@gmail.com">iman.samanta.code@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/iman-samanta-646102315/">linkedin.com/iman-samanta-646102315</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/ImanSamantaCoder">github.com/ImanSamantaCoder</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;