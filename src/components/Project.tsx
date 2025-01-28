import React from 'react';
import "../css-files/project.css"
import Image from 'next/image';
const Project: React.FC = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A responsive Portfolio website built with HTML CSS and JavaScript",
            image: "/images/web image/PORTFOLIOO.png", // Replace with your image URL

        },
        {
            title: "Amazon Website",
            description: "A responsive Yummy  website built with HTML CSS and JavaScript",
            image: "/images/web image/AMAZON.png", // Replace with your image URL

        },
        {
            title: "Yummy Website",
            description: "A responsive Yummy  website built with HTML CSS and JavaScript",
            image: "/images/web image/YUMMY.png", // Replace with your image URL

        },
        {
            title: "Ecomile App",
            description: "A responsive Fuel Monitoring App built with Flutter",
            image: "/images/app image/ECOMILE.png", // Replace with your image URL

        },
        {
            title: "Ecommerce App",
            description: "A responsive Ecommerce App built with Flutter",
            image: "/images/app image/ECOMMERCE.png", // Replace with your image URL

        },
        {
            title: "Eduflex App",
            description: "A responsive Education Flexibility App built with Flutter",
            image: "/images/app image/EDUFLEX.png", // Replace with your image URL

        },
    ];

    return (
        <div className="projects-container">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <Image src={project.image} alt={project.title} width={100} height={100} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                              
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
