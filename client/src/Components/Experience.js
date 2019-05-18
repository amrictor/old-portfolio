import React, { Component } from 'react';
import { UncontrolledTooltip } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

import { FaMapMarkerAlt as Location, FaRegCalendarAlt as Date } from 'react-icons/fa'
import { FaPython as Python, FaJava as Java, FaJsSquare as JS, FaHtml5 as HTML } from 'react-icons/fa'
import { FaGitSquare as Git, FaMicrosoft as Windows, FaLinux as Linux, FaCss3Alt as CSS} from 'react-icons/fa'
import { GoTerminal as Bash } from 'react-icons/go'

import './Experience.css'

import csu from '../resources/csu.svg'
import cpp from '../resources/C++.svg'
import latlon from '../resources/lat-lon.png'
import pelco from '../resources/pelco.png'
import resume from '../resources/Resume.pdf'

class Experience extends Component {

  experienceBlock(job) {
    //company, role, location, link, img, start, end, description) {
    return(
      <div>
        <Row>
          <Col xs='7'>
            <p className="lead">{job.company} - {job.role}</p>
            <p><Location/>&nbsp;{job.location}&nbsp;&nbsp;&nbsp;&nbsp;<Date/>&nbsp;{job.start} - {job.end}</p>
          </Col>
          <Col xs='5'>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <img id="image" className='float-right' height='55' src={job.img} alt={job.company + " logo"}/>
            </a>
          </Col>
        </Row>
        <hr className="my-2" />
        <p>{job.description} {job.languages}</p>
        <br/>
      </div>
    )
  }

  softwareBadge(name, icon, placement){
    return (
      <div>
          <UncontrolledTooltip 
            placement={placement} 
            target={name.replace("++", "pp")
                        .replace("HTML", "HTML5")
                        .replace(" ", "")}
          >
            {name}
          </UncontrolledTooltip>
          {icon}
      </div>
    );
  }

  render() {
    return (
      <div className='experience'>
     
      <Container fluid>
        <Container className='options'>
          <br/>
          <a href={resume} target="_blank" rel="noopener noreferrer">View PDF Resume</a>
        </Container>
        <hr/>
        <Container className='languages'>
          <p className='lead heading'>Languages and Software</p>
          
          <Row align='center'>
            <Col xs='3'/>
            <Col xs='1'>
              {this.softwareBadge("Java", <Java id="Java"/>, "top")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("Python", <Python id="Python"/>, "top")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("C++", <img id="Cpp" height='38px' src={cpp} alt="C++"/>, "top")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("Javascript", <JS id="Javascript"/>, "top")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("HTML", <HTML id="HTML5"/>, "top")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("CSS", <CSS id="CSS"/>, "top")}
            </Col>
            <Col xs='3'/>
          </Row>
          <Row>
            <Col xs='4'/>
            <Col xs='1'>
              {this.softwareBadge("Windows", <Windows id="Windows"/>, "bottom")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("Linux", <Linux id="Linux"/>, "bottom")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("Shell Script", <Bash id="ShellScript"/>, "bottom")}
            </Col>
            <Col xs='1'>
              {this.softwareBadge("Git", <Git id="Git"/>, "bottom")}
            </Col>
          
            <Col xs='4'/>
          </Row>
        </Container>
        <br/>
        <hr/>
        <Container className='jobs'>
          <p className='lead heading'>Professional Experience</p>
          {this.experienceBlock(
            {
              'company' : "Pelco by Schneider Electric", 
              'role' : "Intern",
              'location' : "Fort Collins, Colorado", 
              'link' : "https://www.pelco.com/",
              'img' : pelco,
              'start' : "May 2018",
              'end' : "October 2018",
              'description' : "Worked in an agile environment with a remote team to automate testing of API calls to a security video management system."
            }
          )}
          {this.experienceBlock(
            {
              'company' : "Colorado State University", 
              'role' : "Teaching Assistant", 
              'location' : "Fort Collins, Colorado", 
              'link' : "http://compsci.colostate.edu/",
              'img' : csu,
              'start' : "August 2017",
              'end' : "May 2018",
              'description' : "Taught the foundations of Java and Object Oriented programming to small groups in lab. Worked “Help Desk” hours to be available for one-on-one assistance and clarification."
            }
          )}
          {this.experienceBlock(
            {
              'company' : "Lat-Lon", 
              'role' : "Intern",
              'location' : "Denver, Colorado", 
              'link' : "https://www.lat-lon.com/",
              'img' : latlon,
              'start' : "June 2017",
              'end' : "August 2017",
              'description' : "Constructed GPS units designed to record and report custom metrics to the client’s online interface. Soldered and programmed boards, tested and inspected units, and gained experience with quality assurance in a technical workplace."
            }
          )}
        
        </Container>
      </Container>
    </div>
    )
  }
}
export default Experience;