import React from 'react';
import { Container } from 'reactstrap'

import csu from '../resources/csu.svg'
import latlon from '../resources/lat-lon.png'
import hpe from '../resources/hpe.svg'
import pelco from '../resources/pelco.png'
import acmw from '../resources/acmw.png'
import eyh from '../resources/eyh.png'
import extralife from '../resources/extralife.png'
import mentor from '../resources/cs[u].png'

const jobs = [
    {
      'company' : "Hewlett Packard Enterprise", 
      'role' : "Software Development Intern",
      'location' : "Fort Collins, Colorado", 
      'link' : "www.hpe.com/‎",
      'img' : hpe,
      'start' : "May 2019",
      'end' : "Present",
      'description' : "Saved hours of developer time during triage by creating a tool for the visualization and navigation of log files.\
      Parsed log information from 100,000+ line log files, stored and accessed data using PostgreSQL and GraphQL.\
      Intuitively displayed data in a locally hosted ReactJS web application; log entries follow the chronological flow of system activity and allowing users to filter for more relevant events."
    },
    {
      'company' : "Pelco by Schneider Electric", 
      'role' : "Intern",
      'location' : "Fort Collins, Colorado", 
      'link' : "https://www.pelco.com/",
      'img' : pelco,
      'start' : "May 2018",
      'end' : "October 2018",
      'description' : "Worked in an agile environment with a remote team to automate testing of API calls to a security video management system using Python and Robot Framework."
    },
    {
      'company' : "Colorado State University", 
      'role' : "Teaching Assistant", 
      'location' : "Fort Collins, Colorado", 
      'link' : "http://compsci.colostate.edu/",
      'img' : csu,
      'start' : "August 2017",
      'end' : "May 2018",
      'description' : "Taught the foundations of Java and Object Oriented programming to small groups in lab. Worked “Help Desk” hours to be available for one-on-one assistance and clarification."
    },
    {
      'company' : "Lat-Lon", 
      'role' : "Intern",
      'location' : "Denver, Colorado", 
      'link' : "https://www.lat-lon.com/",
      'img' : latlon,
      'start' : "June 2017",
      'end' : "August 2017",
      'description' : "Constructed GPS units designed to record and report custom metrics to the client’s online interface. Soldered and programmed boards, tested and inspected units, and gained experience with quality assurance in the context of hardware."
    }
]

const extra = [
        {
          'company' : "CSU's ACM-W Chapter", 
          'role' : "Treasurer, Web Developer, Exofficio",
          'location' : "Fort Collins, Colorado", 
          'link' : "https://www.cs.colostate.edu/~acm-w/",
          'img' : acmw,
          'start' : "August 2016",
          'end' : "December 2019",
          'description' : <React.Fragment>Planned and organized outreach events targeted at underrepresented communities in Computer Science and other technical disciplines at CSU. <Container><li> Oversaw funding and purchases for one year (Fall 2017, Spring 2018)</li><li>Managed and developed automated system for updating website, email list, and event emails (Fall 2018, Spring 2019).</li> <li>Mentored new leadership (Fall 2019).</li></Container></React.Fragment>
        },
    {
      'company' : "CSU Mentorship & Outreach Programs", 
      'role' : "Volunteer/Mentor",
      'location' : "Fort Collins, Colorado", 
      'link' : "http://compsci.colostate.edu/",
      'img' : mentor,
      'start' : "August 2017",
      'end' : "December 2019",
      'description' : "Gave tours, talks, and workshops to prospective students and mentored current students in Computer Science to improve enrollment, retention, and graduation rates particularly for women and other underrepresented students in the department at Colorado State University."
    },
    {
      'company' : "NOCO Expanding Your Horizons", 
      'role' : "Volunteer, Workshop Leader",
      'location' : "Fort Collins, Colorado",
      'link': "https://nocoeyh.wixsite.com/home", 
      'img' : eyh,
      'start' : "April 2017",
      'end' : "April 2019",
      'description' : "Volunteered for and put on \"Binary Bracelets\" workshop for middle school girls with an interest in technology at the annual EYH conference in Fort Collins. Students were able to encode names or initials by stringing two colors of beads together reflecting binary ASCII values."
    },
    {
      'company' : "Extra Life Gaming Marathon", 
      'role' : "Event Coordinator",
      'location' : "Fort Collins, Colorado",
      'link': "https://www.extra-life.org/", 
      'img' : extralife,
      'start' : "November 8, 2019",
      'end' : "November 9, 2019",
      'description' : "Organizing charity gaming marathon on CSU Campus, raising $1,272 for local childrens' hospitals. Leds small team of students and staff in finding location and sponsors, campaigning for donations, advertising, and running the event."
    },
    {
      'company' : "CSU Maker Comittee", 
      'role' : "Founding Member",
      'location' : "Fort Collins, Colorado",
      'link': "http://www.design.colostate.edu/default.aspx", 
      'img' : csu,
      'start' : "October, 2018",
      'end' : "December, 2019",
      'description' : "Created with the inception of the Nancy Richardson Design Center with the goal of helping students not enrolled in Design Thinking courses to get access to training and equipment for prototyping, wood working, and metal working in the Design Center."
    }
]

export { jobs, extra };