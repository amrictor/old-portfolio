import React, { Component } from 'react';
import { Container } from 'reactstrap'

import { FaMapMarkerAlt as Location, FaRegCalendarAlt as Date, FaChevronCircleRight as Closed, FaFilePdf as Resume } from 'react-icons/fa'
import { FaPython as Python, FaJava as Java, FaJsSquare as JS, FaHtml5 as HTML} from 'react-icons/fa'
import { FaGitSquare as Git, FaMicrosoft as Windows, FaLinux as Linux, FaCss3Alt as CSS} from 'react-icons/fa'
import { GoTerminal as Bash } from 'react-icons/go'
import { CustomCpp as Cpp, CustomUnity as Unity, CustomCsharp as Csharp } from 'react-icons/custom'

import resume from '../resources/Resume.pdf'

import { jobs, extra } from "../resources/experience"
import './styles/Experience.scss'


class Experience extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: false,
      jobs: false,
      extra: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(block){
    let state = this.state;
    state[block] = !state[block];
    this.setState(state);
  }

  experienceBlock(job) {
    let separator = <React.Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</React.Fragment>

    return(
      <div className="experience_block">
        <div className = "job_details">
          <div>
            <p className="lead">{job.company} - <i>{job.role}</i></p>
            <p><Location/>&nbsp;{job.location}{separator}<Date/>&nbsp;{job.start} - {job.end}</p>
          </div>
          <div className="spacer"/>
          <div>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <img id="image" width='150' height= '70' src={job.img} alt={job.company + " logo"}/>
            </a>
          </div>
        </div>
        <p>{job.description} {job.languages}</p>
      </div>
    )
  }

  softwareBadge(name, icon){
    return (
      <div className="badge">
          {icon}
          <div className="label">{name}</div>
      </div>
    );
  }

  header(text, toggle) {
    return(
      <div className="sectionHeader" onClick={()=> toggle!=="resume" && this.toggle(toggle)}>
        {toggle!=="resume" ? <Closed className={"show " + (this.state[toggle] ? "open" : "")}/> : <Resume className="show"/>}
        {text}
      </div>
    );
  }

  render() {
    let badges = 
      <div className="badges">
        {this.softwareBadge("Java", <Java id="Java"/>, "top")}
        {this.softwareBadge("Python", <Python id="Python"/>, "top")}
        {this.softwareBadge("C++", <Cpp id="Cpp"/>, "top")}
        {this.softwareBadge("C#", <Csharp id="Csharp"/>, "top")}
        <br/>
        {this.softwareBadge("Javascript", <JS id="Javascript"/>, "top")}
        {this.softwareBadge("HTML", <HTML id="HTML5"/>, "top")}
        {this.softwareBadge("CSS", <CSS id="CSS"/>, "top")}
        <br/>
        {this.softwareBadge("Unity", <Unity id="Unity"/>, "top")}
        {this.softwareBadge("Windows", <Windows id="Windows"/>, "top")}
        {this.softwareBadge("Linux", <Linux id="Linux"/>, "top")}
        {this.softwareBadge("Shell Script", <Bash id="ShellScript"/>, "top")}
        {this.softwareBadge("Git", <Git id="Git"/>, "top")}
      </div>

    return (
      
      <Container fluid className='page'>
      
        {this.header("Languages and Software", "languages")}
        <div className= {"hidden " + (this.state.languages && "open")} >
          {badges}
        </div>

        {this.header("Professional Experience", "jobs")}
        <div className= {"hidden " + (this.state.jobs && "open")} >
            {jobs.map((job)=>this.experienceBlock(job))}
        </div>

        {this.header("Outside Involvement", "extra")}
        <div className= {"hidden " + (this.state.extra && "open")} >
          {extra.map((extra)=>this.experienceBlock(extra))}
        </div>

        {this.header(<a href={resume} target="_blank" rel="noopener noreferrer">View PDF Resume</a>, "resume")}

    </Container>
    )
  }
}
export default Experience;