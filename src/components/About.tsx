import React from "react";
import "../css-files/about.css";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image"></div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I&apos;m a self-taught front-end developer skilled in HTML, CSS, and
            JavaScript. I&apos;m also diving into Flutter development to create
            engaging mobile apps for iOS and Android. With my expertise in web
            design and enthusiasm for Flutter.
          </p>
          <p className="about-description">
            I&apos;m committed to delivering top-notch digital solutions. Let&apos;s team
            up to bring your vision to life on both web and mobile platforms.
          </p>
          <Link href="/Project">
            <button className="explore-button">Explore My Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
