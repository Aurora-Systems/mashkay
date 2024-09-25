"use client"
import { useRef,FormEvent, useState } from "react"
import {toast, ToastContainer} from "react-toastify"
import emailjs from "@emailjs/browser"
export default function GetAQoute(){
    const [loading,set_loading] = useState<boolean>(false)
    const form:any = useRef(null)
    const send_email=(e:FormEvent)=>{
        e.preventDefault()
        set_loading(true)
        emailjs
      .sendForm('service_yrdimda', 'template_nmseuti', form.current, {
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
        <></>
        // <div className="container mb-5">
        //     <div className="text-center mt-5">
        //         <h1 className="fw-bold display-2 text-black">Get A <span className="secondary_text">Qoutation</span></h1>
        //         <p>Quickly get information and pricing for the part you are looking for!</p>
        //     </div>
        //     <div className="bg-light p-3 rounded">

        //     <form ref={form} onSubmit={send_email}>
        //         <div className="row">
        //             <div className="col-sm mb-2">
        //                 <span>First Name</span>
        //                 <input type="text" name="first_name" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //                 <span>Last Name</span>
        //                 <input type="text" name="last_name" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //                 <span>Email</span>
        //                 <input type="email" name="email" className="form-control" required/>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-sm  mb-2">
        //                 <span>Phone Number</span>
        //                 <input type="text" name="phone_number" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //                 <span>Address</span>
        //                 <input type="text" name="address" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //                 <span>City</span>
        //                 <input type="text" name="city" className="form-control" required/>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-sm  mb-2">
        //                 <span>Province</span>
        //                 <input type="text" name="province" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //                 <span>Postal Code</span>
        //                 <input type="text" name="postal_code" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //                 <span>Country</span>
        //                 <input type="text" name="country" className="form-control" required/>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-sm  mb-2">
        //                 <span>Please select your vehicle type</span>
        //                 <select className="form-control" name="vehicle_brand" required>
        //                     <option></option>
        //                     <option>Toyota</option>
        //                     <option>Ford</option>
        //                     <option>Mazda</option>
        //                     <option>Nissan</option>
        //                     <option>Mercedes Benz</option>
        //                     <option>CAT</option>
        //                     <option>Komatsu</option>
        //                     <option>Hitachi</option>
        //                     <option>Volvo</option>
        //                     <option>JCB</option>
        //                     <option>XCMG</option>
        //                     <option>Scania</option>
        //                     <option>Iveco</option>
        //                     <option>Marcopolo</option>
        //                     <option>Yutong</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-sm  mb-2">
        //             <span>What year was your vehicle manufactured in?</span>
        //             <input type="text" name="year" className="form-control" required/>
        //             </div>
        //             <div className="col-sm  mb-2">
        //             <span>Vehicle Identification Number | VIN ?</span>
        //             <input type="text" name="vin" className="form-control" required/>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-sm mb-2">
        //                 <span>Describe the part you want in detail</span>
        //                 <textarea className="form-control" name="description" required></textarea>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-sm text-center">
        //                 <button 
        //                     type="submit" 
        //                     className="btn secondary_button"
        //                     disabled={loading}
        //                 > {loading?"Sending....":"Request Qoutation"}</button>
        //             </div>
        //         </div>
        //     </form>
        //     </div>
        //     <ToastContainer/>
        // </div>
    )
}