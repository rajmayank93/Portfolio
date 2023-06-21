import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="https://raw.githubusercontent.com/rajmayank93/iiit-info/bc07c33598124dc86c8ce34220283f6328a05495/assets/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Mayank Gupta</strong>. I am pre-final
              Year Student at{" "}
              <i>Indian Institite of Information Technology, Sri City</i>.I am
              Tech enthusiast. I love to work with new technologies.I am{" "}
              <i>open to work for Entry Level positions</i>.I did internship in
              My 3rd Year. I built multiple projects and contributed to the
              developement like IIIT Info App, Tour-Booking Web Application,
              Blog Website to showcase my skills.I am good a Problem Solver.
            </ScrollAnimation>

            <br />
            <br />

            {/* <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a strong
              passion for problem-solving, which led me to pursue the Computer
              Systems Technology program. Despite its challenges, I remained
              determined and forged lasting friendships that supported me
              throughout this demanding program. Throughout my studies at BCIT,
              I had the opportunity to engage in fascinating projects. Notably,
              I contributed to the development of the RENR Safety App and
              MyMind, projects that garnered recognition from my colleagues,
              instructors, and clients alike.
            </ScrollAnimation> */}

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
