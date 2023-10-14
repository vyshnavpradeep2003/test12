import React from 'react';
import './style.css';
import About from './About';
import Contact from './Contact';
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Artificial Intelligence',
          description: 'Sentimental analysis',
          link: 'https://drive.google.com/drive/folders/1weSj_A8GYLjcUP3-VWB7_Px6egAYmiUE?usp=sharing',
        },
        {
          title: 'React JS project',
          description: 'Website development',
          link: 'https://test6-gamma.vercel.app/',
        },
        {
            title:'HTML and CSS project',
            description: 'Styling the website',
            link: 'https://vyshnavpradeep2003.github.io/test2/'
        },
      ],
    };
  }

  render() {
    return (
      <div className="portfolio">
        <h1>My Portfolio</h1>
        <nav>
          <ol>
            <li>
              <a href="#about">{<About/>}</a>
            </li>
            <li>
              <a href="#contact">{<Contact/>}</a>
            </li>
          </ol>
        </nav>
        <h4>Hi, I am Vyshnav Pradeep graduated
            from VIT,Vellore with a degree in B.tech,
            CSBS branch.
        </h4>
        <h2> My Projects</h2>
        <div className="project-list">
          {this.state.projects.map((project, index) => (
            <div className="project" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
