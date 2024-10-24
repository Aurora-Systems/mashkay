"use client"
import { useState } from "react";
import { bg_img } from "./components/css_functions"
import Link from "next/link";
import slide from "./db/slide_show.json"


export default function Home() {
  const [slide_data,set_slide_data] = useState(slide)
  const [selected_slide,set_selected_slide] = useState<number>(0)

  const handle_slide=(direction: "forward"|"backward")=>{
    const slide_length = slide_data.length
    if(direction==="forward"){
      const added_side = selected_slide+1
      if(added_side>=slide_length){
        set_selected_slide(0)
      }else{
        set_selected_slide(added_side)
      }
    }else{
      const minus_side = selected_slide-1
      if(minus_side<0){
        set_selected_slide(slide_length-1)
      }else{
        set_selected_slide(minus_side)
      }
    }
  }
  
  return (
    <main>
      <div className="vh-100 d-flex justify-content-between align-items-center" style={bg_img(slide_data[selected_slide].imag)}>
        <div>
        <button className="text-white btn btn-none " onClick={()=>handle_slide("backward")}><i className="bi bi-caret-left display-5"></i></button>
        </div>
        <div className="bg-dark bg-opacity-75 text-center p-5 rounded w-md-50 text-white"  >
          <h1 className="fw-bold text-white">Mashkay Autoparts</h1>
          <p>Your One Stop Shop For All Your Genuine Quality Automotive Parts</p>
          <p>{slide_data[selected_slide].brands}</p>
          <Link href={slide_data[selected_slide].link}><button className="btn secondary_button">View {slide_data[selected_slide].category} Catalogue</button></Link>
        </div>
        <div>
        <button className="text-white btn btn-none" onClick={()=>handle_slide("forward")}><i className="bi bi-caret-right display-5"></i></button>
        </div>
      </div>
      <div className="container_fluid mt-5 mb-5">
        <div className="text-center">
          {/* <h2 className="fw-bold display-2 text-black">The Autopart <span className="secondary_text">Centre</span></h2> */}
          <p className="p-3">Mashkay Offers the widest range of premium quality parts. There is no substitute to quality
            when it comes to premium vehicle replacement parts. That’s why Mashkay stocks
            aunthentic brands made to match OE specifications . With countrywide
            distribution we offer a consistent supply of superior quality suitable replacement
            parts delivered to you remarkably at affordable
            prices.</p>
        </div>
        <div className="m-5">
          <div className="row gap-2 text-white">
            <div className="col-sm secondary_background rounded p-2 text-center mb-2">
              <h4 className="fw-bold text-center">Buses</h4>
              <div className="small_img_holder  rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/different-passenger-bus-designs-image-2.avif")} >

              </div>
              {/* <img src="" className="img-thumbnail" alt="" /> */}
            </div>
            <div className="col-sm secondary_background rounded p-2 text-center mb-2">
              <h4 className="fw-bold text-center">Trucks</h4>
              <div className="small_img_holder  rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/163035234858169.jpg")} >

              </div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/1294.jpg" className="img-thumbnail" alt="" /> */}

            </div>
            <div className="col-sm secondary_background rounded p-2 text-center mb-2">
              <h4 className="fw-bold text-center">Yellow Machines</h4>
              <div className="small_img_holder  rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/CM20210126-5d492-16f0e.jpeg")} >

              </div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/2149194766.jpg" className="img-thumbnail" alt="" /> */}

            </div>

            <div className="col-sm secondary_background rounded p-2 text-center mb-2" >
              <h4 className="fw-bold">4x4</h4>
              <div className="small_img_holder rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/VW_Amarok_-_Colorado_-_Nissan_Navara_-_Ranger.jpg")} >

              </div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/pexels-lenzatic-17157308.jpg" className="img-thumbnail" alt="" /> */}

            </div>
          </div>
          <div className="text-center mt-3">
            <Link href="/our_products"><button className="btn bg-black rounded text-white primary_button">View Our Products</button></Link>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row bg-black pt-5 pb-5 ">
          <div className="col-sm  text-center bg-black text-white border-end border-danger border-5">
            <h2 className="display-2 fw-bold ">
              WHY US?
            </h2>
            <p>
              At Mashkay Autoparts, we are dedicated to providing high-quality vehicle parts for all your automotive needs. Our extensive inventory includes a wide range of genuine and reliable auto parts designed to keep your vehicle running smoothly and efficiently. Whether you&apos;re a DIY enthusiast or a professional mechanic, we have the parts and expertise to support your automotive projects.
              <br />
              Explore our site to find the parts you need and enjoy exceptional service with fast shipping and competitive prices. At Mashkay Autoparts, we are committed to excellence in every part we offer.
            </p>

          </div>
        
        </div>
      </div>
      {/* <div className="container p-3 text-center">
        <h1 className="display-1 fw-bold">Genuine Parts from <span className="secondary_text">Global Manufacturers</span></h1>
        <p>At Mashkay Autoparts, we pride ourselves on offering only genuine parts sourced directly from the world’s leading manufacturers. Whether you&apos;re looking for American-made durability, European engineering precision, or advanced Chinese innovations, we ensure that every part is authentic, high-quality, and tailored to your vehicle&apos;s needs.
        </p>
        <div className="row text-center">

          <div className="col-sm">
            <img src="https://ngratesc.sirv.com/Mashkay/american_ford.png" className="img-fluid rounded" />

          </div>
          <div className="col-sm d-flex align-items-center">
            <div>

              <h1>American</h1>
              <p>We source genuine parts from top American manufacturers, ensuring that the components you receive are built with the ruggedness and quality American engineering is known for. These parts are designed to meet stringent standards and ensure long-lasting performance, particularly for heavy-duty trucks and 4x4 vehicles. Each part is directly sourced from the manufacturers’ headquarters in the USA, guaranteeing authenticity and compliance with original equipment manufacturer (OEM) specifications. Whether it’s for a Ford, Dodge, or Chevrolet, you can trust our parts to deliver unmatched durability and reliability.</p>
            </div>
          </div>


        </div>
        <div className="row text-center mb-3">
        <div className="col-sm mb-2 order-md-2">
            <img src="https://ngratesc.sirv.com/Mashkay/truck_europe.png" className="img-fluid rounded" />
          </div>
          <div className="col-sm mb-2 d-flex align-items-center">
            <div className="">

            <h1>European</h1>
            <p>European vehicles are known for their sophisticated engineering and precision, and we ensure that the parts we supply meet these exacting standards. Sourced directly from the headquarters of renowned European manufacturers such as Mercedes-Benz, BMW, and Volkswagen, our parts are genuine, certified, and perfectly compatible with your vehicle. Whether it’s for a high-performance engine, advanced suspension system, or premium body components, we guarantee the authenticity of each part. Our strong connections with European suppliers ensure you get the exact replacements your vehicle needs, maintaining both its performance and value.</p>
            </div>

          </div>
         
        </div>
        <div className="row text-center mb-3">
        <div className="col-sm mb-2">
            <img src="https://ngratesc.sirv.com/Mashkay/chinese_tong.png" className="img-fluid rounded" />

          </div>
          <div className="col-sm mb-2 d-flex align-items-center">
          
            <div>

            <h1>Chinese</h1>
            <p>China is becoming a major player in the automotive industry, with a growing number of manufacturers producing high-quality parts and vehicles. At Mashkay Autoparts, we source directly from leading Chinese manufacturers, ensuring that all parts meet the highest standards for durability and efficiency. From advanced electronics to engine components, our Chinese-sourced parts are genuine and affordable, providing excellent value for customers. Sourced straight from Chinese manufacturing hubs, these parts offer innovative solutions without compromising on quality.</p>
          
            </div>
            </div>
         


        </div>
      </div> */}

      <div className="text-center container-fluid">
        {/* <h2 className="display-2 fw-bold text-black mb-5">In <span className="secondary_text">Stock</span></h2> */}
        {/* <Marquee>
          <div className="col-sm me-4 instock_items">
            <div className="align-items-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/intricate-arrangement-automotive-engine-components-displayed-neutral-background-transparent-png-background_94628-97333.jpg"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Engine Parts</span>
              </div>
            </div>
          </div>
          <div className="col-sm me-4 instock_items">
            <div className=" align-items-center gap-2 bg-light">
              <div className=" rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/close-up-hand-male-mechanic-changing-car-battery-car-service-center-concept-car-maintenance_61243-1199.avif"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Electrical</span>
              </div>
            </div>
          </div>
          <div className="col-sm me-4 instock_items">
            <div className="align-items-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/radiator.avif"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Cooling Parts</span>
              </div>
            </div>
          </div>

    
          <div className="col-sm me-4 instock_items">
            <div className="align-items-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/electric-car-cystem-wheelbase-with-electric-vehicle-drive-system-battery-pack-3d-render-white_268321-2970.jpg" width="" className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Suspension</span>
              </div>
            </div>
          </div> 
          <div className="col-sm me-4 instock_items">
            <div className="align-items-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/springs.jpg" className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Springs</span>
              </div>
            </div>
          </div>
          <div className="col-sm me-4 instock_items">
            <div className="align-items-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/red-signal-horn-truck-bus_1032820-2540.jpg"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Horns</span>
              </div>
            </div>
          </div>
          <div className="col-sm me-4 instock_items">
            <div className=" align-items-center text-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/rear-light-new-silver-car_23-2147962986.jpg"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Lights</span>
              </div>
            </div>
          </div>
          <div className="col-sm me-4 instock_items">
            <div className=" align-items-center gap-2 bg-light">
              <div className="rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/oil-filters-white-background_995428-11620.avif"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Filter Parts</span>
              </div>
            </div>
          </div>
          <div className="col-sm  me-4 instock_items" >
            <div className=" align-items-center gap-2 bg-light">
              <div className=" rounded p-3">
                <img src="https://ngratesc.sirv.com/Mashkay/26910.jpg"  className="img-fluid" />
              </div>
              <div className="bg-light rounded">
                <span className="fw-bold">Brake Disks and Pads</span>
              </div>
            </div>
          </div>
          </Marquee> */}

      </div>
      <div className="bg-black text-center mt-4">
        <h2 className="display-2 fw-bold text-white">Our Product <span className="secondary_text">Partners</span></h2>
      </div>
      <div className="text-center">
        <img src="https://ngratesc.sirv.com/Mashkay/products.png" className="img-fluid" />

      </div>
    </main>
  );
}
