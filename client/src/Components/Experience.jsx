import React, { Component } from 'react';
import { UncontrolledTooltip } from 'reactstrap'
import { Jumbotron, Card, CardBody, Container, Row, Col } from 'reactstrap'

import { FaMapMarkerAlt as Location, FaRegCalendarAlt as Date } from 'react-icons/fa'
import { FaPython as Python, FaJava as Java, FaJsSquare as JS, FaHtml5 as HTML} from 'react-icons/fa'
import { FaGitSquare as Git, FaMicrosoft as Windows, FaLinux as Linux, FaCss3Alt as CSS} from 'react-icons/fa'
import { GoTerminal as Bash } from 'react-icons/go'
import { CustomCpp as Cpp, CustomUnity as Unity, CustomCsharp as Csharp } from 'react-icons/custom'

import './Experience.css'

import csu from '../resources/csu.svg'
// import cpp from '../resources/C++.svg'
// import csharp from '../resources/csharp.svg'
import latlon from '../resources/lat-lon.png'
import hpe from '../resources/hpe.svg'
import pelco from '../resources/pelco.png'
// import resume from '../resources/Resume.pdf'
import acmw from '../resources/acmw.png'
import eyh from '../resources/eyh.png'
import extralife from '../resources/extralife.png'
import mentor from '../resources/cs[u].png'
// import unity from '../resources/unity.svg'

class Experience extends Component {

  experienceBlock(job, columns=false, side='left') {
    //company, role, location, link, img, start, end, description) {
    let separator = (columns) ? <br/> : <React.Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</React.Fragment>

    return(
      <React.Fragment>
      <Card className="">
        <CardBody>
        <Row>
          <Col xs='7'>
            <p className="lead">{job.company}{columns ? <br/> : " "}- {job.role}</p>
            <p><Location/>&nbsp;{job.location}{separator}<Date/>&nbsp;{job.start} - {job.end}</p>
          </Col>
          <Col xs='5'>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              <img id="image" className='float-right' width='150' height= '70' src={job.img} alt={job.company + " logo"}/>
            </a>
          </Col>
        </Row>
        <hr className="my-2" />
        <p>{job.description} {job.languages}</p>
      </CardBody>
      </Card>
      <br/>
      </React.Fragment>
    )
  }

  softwareBadge(name, icon, placement){
    return (
      <div>
          <UncontrolledTooltip
            fade={true} 
            placement={placement}
            innerClassName="description" 
            arrowClassName="description"
            target={name.replace("++", "pp")
                        .replace("HTML", "HTML5")
                        .replace(" ", "")
                        .replace("#", "sharp")}
          >
            <div className="accent">{name}</div>
          </UncontrolledTooltip>
          {icon}
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
        {this.softwareBadge("Javascript", <JS id="Javascript"/>, "top")}
        {this.softwareBadge("HTML", <HTML id="HTML5"/>, "top")}
        
        {this.softwareBadge("CSS", <CSS id="CSS"/>, "top")}
        {this.softwareBadge("Unity", <Unity id="Unity"/>, "top")}
        {this.softwareBadge("Windows", <Windows id="Windows"/>, "top")}
        {this.softwareBadge("Linux", <Linux id="Linux"/>, "top")}
        {this.softwareBadge("Shell Script", <Bash id="ShellScript"/>, "top")}
        {this.softwareBadge("Git", <Git id="Git"/>, "top")}
    </div>

    return (
      <Container fluid className='page'>
      <Container fluid>
        <br/>
        <Container className='languages icons'>
          <p className='lead heading black'>Languages and Software</p>
          <hr/>
          {badges}
        </Container>
        <br/><br/>
        <Container className='jobs'>
          <p className='lead heading'>Professional Experience</p>
          <hr/>
          {this.experienceBlock(
            {
              'company' : "Hewlett Packard Enterprise", 
              'role' : "OneView Intern",
              'location' : "Fort Collins, Colorado", 
              'link' : "www.hpe.com/‎",
              'img' : hpe,
              'start' : "May 2019",
              'end' : "Present",
              'description' : "Develops application for the visualization and navigation of large log files across multiple systems."
            }
          )}
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
        <br/><br/>
        <Container className='extracurricular'>
          <p className='lead heading black'>Extracurricular Activities</p>
          <hr/>
          <Row>
            <Col lg>
              {this.experienceBlock(
                {
                  'company' : "CSU's ACM-W Chapter", 
                  'role' : "Treasurer, Web Developer, Exofficio",
                  'location' : "Fort Collins, Colorado", 
                  'link' : "https://www.cs.colostate.edu/~acm-w/",
                  'img' : acmw,
                  'start' : "August 2016",
                  'end' : "December 2019",
                  'description' : <React.Fragment>Planned and organized outreach events targeted at underrepresented communities in Computer Science and other technical disciplines at CSU. <Container><li> Oversaw funding and purchases for one year (Fall 2017, Spring 2018)</li><li>Managed and developed automated system for updating website, email list, and event emails (Fall 2018, Spring 2019).</li> <li>Mentored new leadership (Fall 2019).</li></Container></React.Fragment>
                }, true
              )}
              {this.experienceBlock(
                {
                  'company' : "CSU Mentorship & Outreach Programs", 
                  'role' : "Volunteer/Mentor",
                  'location' : "Fort Collins, Colorado", 
                  'link' : "http://compsci.colostate.edu/",
                  'img' : mentor,
                  'start' : "August 2017",
                  'end' : "December 2019",
                  'description' : "Gave tours, talks, and workshops to prospective students and mentored current students in Computer Science to improve enrollment, retention, and graduation rates particularly for women and other underrepresented students in the department at Colorado State University."
                }, true
              )}
            </Col>
            <Col md>
              {this.experienceBlock(
                {
                  'company' : "NOCO Expanding Your Horizons", 
                  'role' : "Volunteer, Workshop Leader",
                  'location' : "Fort Collins, Colorado",
                  'link': "https://nocoeyh.wixsite.com/home", 
                  'img' : eyh,
                  'start' : "April 2017",
                  'end' : "April 2019",
                  'description' : "Volunteered for and put on \"Binary Bracelets\" workshop for middle school girls with an interest in technology at the annual EYH conference in Fort Collins. Students were able to encode names or initials by stringing two colors of beads together reflecting binary ASCII values."
                }, true
              )}
              {this.experienceBlock(
                {
                  'company' : "Extra Life Gaming Marathon", 
                  'role' : "Event Coordinator",
                  'location' : "Fort Collins, Colorado",
                  'link': "https://www.extra-life.org/", 
                  'img' : extralife,
                  'start' : "November 8, 2019",
                  'end' : "November 9, 2019",
                  'description' : "Organizing charity gaming marathon on CSU Campus, raising money for local childrens' hospitals. Leads small team of students and staff in finding location and sponsors, campaigning for donations, and advertising the event."
                }, true
              )}
              {this.experienceBlock(
                {
                  'company' : "CSU Maker Comittee", 
                  'role' : "Founding Member",
                  'location' : "Fort Collins, Colorado",
                  'link': "http://www.design.colostate.edu/default.aspx", 
                  'img' : csu,
                  'start' : "October, 2018",
                  'end' : "December, 2019",
                  'description' : "Created with the inception of the Nancy Richardson Design Center with the goal of helping students not enrolled in Design Thinking courses to get access to training and equipment for prototyping, wood working, and metal working in the Design Center."
                }, true
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
    )
  }
}
export default Experience;