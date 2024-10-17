"use client"
import { phone_no_formatted } from "./resusable"
import { Nav, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap"
import { FormEvent, useRef, useState } from "react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';


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
                                <Nav.Link className="text-white" href="/">Home</Nav.Link>
                                <Nav.Link className="text-white"href="/our_products">Our Products</Nav.Link>
                                <Nav.Link className="text-white"href="/about_us">About Us</Nav.Link>
                                <Nav.Link className="text-white"href="/blog">Blog</Nav.Link>
                                <Nav.Link className="text-white"href="#contact_us">Contact Us</Nav.Link>
                            </Nav>
                            <Link href="/get_a_qoute"><button className="btn secondary_button p-2 border border-white border-3">Get A Qoute</button></Link>
                        </NavbarCollapse>
                </Navbar>
                </div>
            </div>
        </div>
    )
}


export const Footer=()=>{
    const [loading,set_loading] = useState<boolean>(false)
    const form:any = useRef(null)
    const send_email=(e:FormEvent)=>{
        e.preventDefault()
        set_loading(true)

        emailjs
      .sendForm('service_yrdimda', 'template_dptfj1n', form.current, {
        publicKey: 'UiTheRT3ZQsrbXGtJ',
      })
      .then(
        () => {
          toast('Message sent!');
            form.current.reset(); // Reset the form using ref
          
        },
        (error) => {
          toast('Failed to send message please try again later');
        },
      ).finally(()=>{
        set_loading(false)
      })
    }
    return(
        <div className="m-0 p-0" id="contact_us">
            <div className="text-center container">
                <h2 className="display-1 fw-bold text-black">Contact <span className="secondary_text">Us</span></h2>
            </div>
            <div className="container">
            <div className="row mb-3 p-1">
                <div className="col-sm">
                <iframe className="w-100 h-100 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.638410137692!2d31.04913077402001!3d-17.85557778311363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a500700abc9b%3A0x33b05d1a1f4eb5c8!2sMashkay%20Autoparts!5e0!3m2!1sen!2szw!4v1724341946954!5m2!1sen!2szw"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-sm">
                    <form ref={form} onSubmit={send_email}>
                       <div className="mb-2">
                        <span>Full Name</span>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control"
                        />
                       </div>
                       <div className="mb-2">
                        <span>Phone No</span>
                        <input type="tel"name="phone_no"  className="form-control"/>
                       </div>
                       <div className="mb-2">
                        <span>Email</span>
                        <input type="text" name="email" className="form-control"/>
                       </div>
                       <div className="mb-2">
                        <span>VIN - Vehicle Identification Number</span>
                        <input type="text" name="vin" className="form-control"/>
                       </div>
                       <div className="mb-2">
                        <span>Message</span>
                        <textarea className="form-control" name="message"></textarea>
                       </div>
                       <div>
                        <button type="submit" className="btn secondary_button" disabled={loading}>{loading?"Sending...":"Send Message"}</button>
                       </div>
                    </form>
                </div>
            </div>
            </div>
           
            <div className="bg-black text-white p-3 ">
                <div className="row d-flex flex-row align-items-centerjustify-content-center">
                    <div className="col-sm d-flex flex-column text-center align-items-center justify-content-center">
                        <h3 className="fw-bold">Contact Details</h3>
                        <span>1 Edison Crescent, Harare , Zimbabwe</span>
                        <span>sales@mashkay.co.zw</span>
                        <span>{phone_no_formatted}</span>
                    </div>
                    <div className="col-sm text-center d-flex flex-column align-items-center justify-content-center">
                        <h3 className="fw-bold">Pages</h3>
                        <Link href={"/our_products"}>Our Products</Link>
                        <Link href={"/about_us"}>About Us</Link>
                        <Link href={"/blog"}>Blog</Link>

                    </div>
                    <div className="col-sm d-flex flex-column align-items-center justify-content-center">
                           <h3 className="fw-bold">Socials</h3>
                           <Link target="_blank" href={"https://www.instagram.com/mashkayautoparts/?hl=en"}>Instagram</Link>
                           <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61557083832788&mibextid=ZbWKwL"}>Facebook</Link>
                           {/* <Link href={""}>Linkedin</Link> */}

                    </div>
                    <div className="col-sm">
                    <iframe src="https://mashkay.substack.com/embed" className="rounded w-100" style={{border:"1px solid #EEE", background:"white"}} frameBorder="0" scrolling="no"></iframe>
                    </div>
                   
                </div>
            </div>
            <div className="secondary_background text-center">
                   <span className="text-white">Designed By <a className="text-white" href="https://aurorasystems.co.zw" target="_blank">Aurora</a></span> 
            </div>
            <ToastContainer/>
        </div>
    )
}