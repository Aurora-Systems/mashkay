"use client"
import { phone_no_formatted } from "./resusable"
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap"
import Image from "next/image"
export const NavBar=()=>{
    return(
        <div className="sticky-top bg-white">
            <div className="bg-white  d-flex flex-wrap justify-content-between pt-1 ms-2 me-2">
                <div>
                    <span><small><i className="bi bi-geo-alt secondary_text"></i> 1 Edison Crescent Graniteside, Harare, Zimbabwe</small></span>
                </div>
                <div className="d-flex gap-2">
                    <span><small><i className="bi bi-envelope secondary_text"></i> sales@mashkay.co.zw</small></span>
                    <span><small><i className="bi bi-telephone secondary_text"></i> {phone_no_formatted}</small></span>
                </div>
            </div>
            <div className="bg-black p-0 sticky-top">
                <div className="ms-2 me-2">

                <Navbar expand="lg" >
                 
                       <NavbarBrand>
                            <div className="bg-white p-2 rounded">
                            {/* eslint-disable-next-line @next/next/no-img-element*/ }
                            <img 
                                width={120} 
                                height={0} 
                                src="https://ngratesc.sirv.com/Mashkay/logo.png" 
                                className="img-fluid"
                                alt="Mashkay logo"
                            />
                            </div>
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav "  >
                        <i className="bi bi-list secondary-text text-white fs-1"></i>
                        </Navbar.Toggle>
                        <NavbarCollapse  id="basic-navbar-nav">
                            <Nav className="text-white me-auto">
                                <Nav.Link className="text-white" href="">Home</Nav.Link>
                                <Nav.Link className="text-white"href="">Our Products</Nav.Link>
                                <Nav.Link className="text-white"href="">About Us</Nav.Link>
                                <Nav.Link className="text-white"href="">Blog</Nav.Link>
                                <Nav.Link className="text-white"href="">Contact Us</Nav.Link>
                            </Nav>
                            <button className="btn secondary_button p-2 border border-white border-3">Get A Qoute</button>

                        </NavbarCollapse>
                       
                   
                </Navbar>
                </div>

            </div>
        </div>
    )
}