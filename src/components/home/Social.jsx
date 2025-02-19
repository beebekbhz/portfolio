import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/beebekbhz/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bx bxl-facebook-circle"></i>
      </a>

      <a
        href="#https://www.x.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-twitter"></i>
      </a>

      <a
        href="https://github.com/beebekbhz"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
