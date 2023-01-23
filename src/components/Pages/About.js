import React from 'react'
import { AboutContainer } from "../styled/AboutS";
import logo2 from "../images/About.png";
import Footer from '../layout/Footer';

export default function About() {
  return (
    <>
      <AboutContainer>
        <div>

          <div>
            <img src={logo2} alt="About_logo" />
          </div>

          <div>
            <h1>About the project</h1>
            <p>This project was made by <span>coelhiNWeb</span>. A basic crud to learn how to control routes and an interactive crud with alerts.</p>
          </div>

        </div>
      </AboutContainer>
      <Footer />
    </>
  )
}
