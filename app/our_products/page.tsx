"use client"
import Marquee from "react-fast-marquee";
import { bg_img } from "../components/css_functions";
import prodcuts from "../db/products.json"

export default function OurProducts(){
    
    return(
        <div className="">
            <div className="text-center mt-5">
                <h1 className="fw-bold display-1 text-black">Our <span className="secondary_text"></span>Products</h1>
            </div>
            <div className="container">
                <div className="mb-3">
                    <Marquee>
                        {
                            prodcuts.map((i,index)=>{
                                return(
                                    <div key={index} className="secondary_background p-2 text-white rounded me-2">
                                        {i.product_category}
                                    </div>

                                )
                            })
                        }
                      
                    </Marquee>
                </div>
           <div className="row">
                <div className="col-sm mb-3" >
                    <div className="rounded-top" style={{...bg_img("https://ngratesc.sirv.com/Mashkay/163035234858169.jpg"), height: "50vh"}}>

                    </div>
                    <div className="secondary_background text-white p-3 rounded-bottom d-flex justify-content-between" >
                        <h5>Trucks</h5>
                        <a href="/our_products/trucks"><u>View Products</u></a>
                    </div>
                </div>
                <div className="col-sm mb-3" >
                    <div className="rounded-top" style={{...bg_img("https://ngratesc.sirv.com/Mashkay/pexels-isaac-mitchell-278678383-13740080.jpg"), height: "50vh"}}>

                    </div>
                    <div className="secondary_background text-white p-3 rounded-bottom d-flex justify-content-between" >
                        <h5>4X4</h5>
                        <a href="/our_products/4x4"><u>View Products</u></a>
                    </div>
                </div>
               
           </div>
           <div className="row">
           <div className="col-sm mb-3" >
                    <div className="rounded-top" style={{...bg_img("https://ngratesc.sirv.com/Mashkay/CM20210126-5d492-16f0e.jpeg"), height: "50vh"}}>

                    </div>
                    <div className="secondary_background text-white p-3 rounded-bottom d-flex justify-content-between" >
                        <h5>Yellow Machines</h5>
                        <a href="/our_products/yellow_machines"><u>View Products</u></a>
                    </div>
                </div>
                <div className="col-sm mb-3" >
                    <div className="rounded-top" style={{...bg_img("https://ngratesc.sirv.com/Mashkay/pexels-timcompound-575622-3608967.jpg"), height: "50vh"}}>

                    </div>
                    <div className="secondary_background text-white p-3 rounded-bottom d-flex justify-content-between" >
                        <h5>Buses</h5>
                        <a href="/our_products/buses"><u>View Products</u></a>
                    </div>
                </div>
           </div>
           </div>
        </div>
    )
}