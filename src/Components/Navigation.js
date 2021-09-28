import React from 'react';
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
const Navigation=({setSelectRating,setSearchCondition})=>{
return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#">Vitrine Poisson</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
     
      </Nav>
      <Nav>
      <Rating onClick={(x) => setSelectRating(x)}  fillColor="#1E90FF"/>
    <Form.Control type="text" placeholder="Search" 
    style ={{ width: "250px" , marginLeft: "1rem"}}
    onChange={(e) => setSearchCondition(e.target.value)}
    ></Form.Control>
      
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)
}
export default Navigation