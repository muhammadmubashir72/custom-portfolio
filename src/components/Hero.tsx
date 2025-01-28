// components/Hero.tsx
import React from 'react';
import "../css-files/hero.css"
import Link from 'next/link';
import Image from 'next/image';



const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Image src="/images/profile.png" alt="mubashir" width={500} height={500} className="hero-image" />
        <h1 className="hero-title">Muhammad Mubashir</h1>
        <p className="hero-description">
          I am a passionate web developer skilled in crafting responsive visually appealing websites
        </p> 
        <Link href="#"> <button className="explore-button">Hire Me</button></Link>
       
      </div>
    </section>
  );
};

export default Hero;

