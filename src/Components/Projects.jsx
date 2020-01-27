import React, { Component } from 'react';
import { Container, UncontrolledCarousel } from 'reactstrap'

import { FaChevronCircleRight as Closed, FaFilePdf as Resume } from 'react-icons/fa'

import { IoLogoGithub as Github } from 'react-icons/io'
import { FaArchive, FaLink as Preview } from 'react-icons/fa';

import resume from '../resources/Resume.pdf'
import {web, other} from '../resources/info/projects.js'
import './styles/Project.scss'

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      web: false,
      visual: false,
      ai: false,
      nontech: false
    }
    this.toggle= this.toggle.bind(this);
  }

  toggle(block){
    let state = this.state;
    state[block] = !state[block];
    this.setState(state);
  }

  header(text, toggle) {
    return(
      <div className="sectionHeader" onClick={()=> toggle!=="resume" && this.toggle(toggle)}>
        {toggle!=="resume" ? <Closed className={"show " + (this.state[toggle] ? "open" : "")}/> : <Resume className="show"/>}
        {text}
      </div>
    );
  }
  // softwareBadge(name, icon, placement){
  //   return (
  //     <div>
  //         <UncontrolledTooltip 
  //           placement={placement} 
  //           target={name.replace("++", "pp")
  //                       .replace("HTML", "HTML5")
  //                       .replace(" ", "")}
  //         >
  //           {name}
  //         </UncontrolledTooltip>
  //         {icon}
  //     </div>
  //   );
  // }

  projectCard(project) {
    return(
      <div className="project_card">  
        <UncontrolledCarousel items={project.images} autoPlay={false} indicators={false} controls={project.images.length>1}/>
        <div className="info">
          <b>{project.title}</b>
          {project.description}
          <div className="icons">
            {(project.github !== undefined) && 
              <a href={project.github} target="_blank" rel="noopener noreferrer" title="Github"><Github/></a>}
            {(project.paper !== undefined) &&
              <a href={project.paper} target="_blank" rel="noopener noreferrer" title="Report"><FaArchive style={{fontSize:25}}/></a>}
            {(project.preview !== undefined) &&
              <a href={project.preview} target="_blank" rel="noopener noreferrer" title="Preview"><Preview style={{fontSize:25}}/></a>}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Container fluid className='page'>
        {this.header("Web Development", "web")}
        <div className= {"hidden " + (this.state.web && "open")} >
          {web.map((project, index) => 
            this.projectCard(project)
          )}  
        </div>
        {this.header("Other Software", "other")}
        <div className= {"hidden " + (this.state.other && "open")} >
          {other.map((project, index) => 
            this.projectCard(project)
          )}  
        </div>
        {this.header(<a href={resume} target="_blank" rel="noopener noreferrer">View PDF Resume</a>, "resume")}

        
      </Container>
    )
  }
}
export default Projects;