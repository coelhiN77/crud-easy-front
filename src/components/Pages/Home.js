import React from 'react'
import { Container, ContactLeft, ContactRight, Button } from "../styled/HomeS";
import { Link } from "react-router-dom"
import Footer from "../layout/Footer"
import logo3 from "../images/Home.png"

export default function Home() {
  return (
    <>
      <Container>
        <ContactLeft>
          <img src={logo3} alt={logo3} />
        </ContactLeft>

        <ContactRight>
          <Button>
            <Link to="/form" style={{ textDecoration:'none', color:'black'}}><button><span>START</span></button></Link>
          </Button>
        </ContactRight>
      </Container>
    <Footer />
    </>
  )
}
