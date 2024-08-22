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


export const Footer=()=>{
    return(
        <div className="m-0 p-0">
            <div className="text-center container">
                <h2 className="display-1 fw-bold text-black">Contact <span className="secondary_text">Us</span></h2>
            </div>
            <div className="container">
            <div className="row mb-3 p-1">
                <div className="col-sm">
                <iframe className="w-100 h-100 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.638410137692!2d31.04913077402001!3d-17.85557778311363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a500700abc9b%3A0x33b05d1a1f4eb5c8!2sMashkay%20Autoparts!5e0!3m2!1sen!2szw!4v1724341946954!5m2!1sen!2szw"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-sm">
                    <form action="">
                       <div className="mb-2">
                        <span>Your Name</span>
                        <input type="text" name="name" className="form-control"/>
                       </div>
                       <div className="mb-2">
                        <span>Your Phone No</span>
                        <input type="tel"name="phone_no"  className="form-control"/>
                       </div>
                       <div className="mb-2">
                        <span>Your Email</span>
                        <input type="text" name="email" className="form-control"/>
                       </div>
                       <div className="mb-2">
                        <span>Your Message</span>
                        <textarea className="form-control" name="message"></textarea>
                       </div>
                       <div>
                        <button type="submit" className="btn secondary_button">Send Message</button>
                       </div>
                    </form>
                </div>
            </div>
            </div>
           
            <div className="secondary_background text-white p-3">
                <div className="row">
                    <div className="col-sm">
                        <p className="fw-bold">Contact Details</p>
                        <p>1 Edison Crescent, Harare , Zimbabwe</p>
                        <p>sales@mashkay.co.zw</p>
                        <p>{phone_no_formatted}</p>
                    </div>
                    <div className="col-sm">
                        <p className="fw-bold">Pages</p>
                        <p>Our Products</p>
                        <p>About Us</p>
                        <p>Blog</p>

                    </div>
                    <div className="col-sm">
                        <div className="p-2 bg-white rounded">
                            <img src="https://ngratesc.sirv.com/Mashkay/logo.png" className="img-fluid" alt="" />
                        </div>
                        <p className="fw-bold">Create Sites with Aurora</p>
                    </div>
                </div>
            </div>
        </div>
    )
}