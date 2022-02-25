import React from 'react';
import { Navbar,  Nav, NavbarBrand } from 'react-bootstrap'
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Technologies  from './Technologies';

export default function NavbarComp () {
    return (
        <BrowserRouter>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <NavbarBrand style={{ color: "blue" }}>
                        Portfolio Stefan Nieuwenburg
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link
                                as={Link}
                                to="/home"
                                style={{ fontSize: "20px" }}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                style={{ fontSize: "20px" }}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/Technologies"
                                style={{ fontSize: "20px" }}>
                                Technologies
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                style={{ fontSize: "20px" }}>
                                Projects
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                style={{ fontSize: "20px" }}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div>
                <Routes>
                    <Route path="/About" element={<About />} />
                    <Route path="/Technologies" element={<Technologies />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
    }

