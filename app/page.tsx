import Marquee from "react-fast-marquee"
import { bg_img } from "./components/css_functions"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="p-0 m-0 d-flex align-items-center justify-content-center" style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/Untitled%20design%20(1).png"), height: "85vh" }}>
        <div className="text-center text-white">
          <h1 className="display-1 fw-bold ">
            MASHKAY AUTOPARTS
          </h1>
          <p className="fw-bold">Your One Stop Shop For All Your Autoparts</p>
          <Link href="/our_products"><button className="btn btn-black text-white primary_button">Shop Now</button></Link>

        </div>
      </div>
      <div className="container_fluid mt-5 mb-5"> 
          <div className="text-center">
            <h2 className="fw-bold display-2 text-black">The Autopart <span className="secondary_text">Centre</span></h2>
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
              <div className="small_img_holder  rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/1688647792248.jpeg")} >

              </div>
              {/* <img src="" className="img-thumbnail" alt="" /> */}
            </div>
            <div className="col-sm secondary_background rounded p-2 text-center mb-2">
              <h4 className="fw-bold text-center">Trucks</h4>
              <div className="small_img_holder  rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/1294.jpg")} >

              </div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/1294.jpg" className="img-thumbnail" alt="" /> */}

            </div>
            <div className="col-sm secondary_background rounded p-2 text-center mb-2">
              <h4 className="fw-bold text-center">Yellow Machines</h4>
              <div className="small_img_holder  rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/2149194766.jpg")} >

              </div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/2149194766.jpg" className="img-thumbnail" alt="" /> */}

            </div>
            <div className="col-sm secondary_background rounded p-2 text-center mb-2">
              <h4 className="fw-bold text-center">Light Vehicles</h4>
              <div className="small_img_holder rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/pexels-mikebirdy-898336.jpg")} >

              </div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/pexels-introspectivedsgn-27639777.jpg" className="img-thumbnail" alt="" /> */}

            </div>
            <div className="col-sm secondary_background rounded p-2 text-center mb-2" >
              <h4 className="fw-bold">4x4</h4>
              <div className="small_img_holder rounded border border-3 w-100" style={bg_img("https://ngratesc.sirv.com/Mashkay/pexels-lenzatic-17157308.jpg")} >

</div>
              {/* <img src="https://ngratesc.sirv.com/Mashkay/pexels-lenzatic-17157308.jpg" className="img-thumbnail" alt="" /> */}

            </div>
          </div>
          <div className="text-center mt-3">
          <Link href="/our_products"><button className="btn bg-black rounded text-white primary_button">Shop Now</button></Link>
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
          <div className="col-sm border-start border-danger border-5" style={bg_img("https://ngratesc.sirv.com/Mashkay/home_two.png")}>

          </div>
        </div>
      </div>
      <div className="text-center container-fluid">
        <h2 className="display-2 fw-bold text-black mb-5">In <span className="secondary_text">Stock</span></h2>
        <Marquee>
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
          </Marquee>
          <div>
            <img src="https://ngratesc.sirv.com/Mashkay/instock_banner.png" className="img-fluid"/>
          </div>
          <Link href="/our_products"><button className="btn secondary_button mt-2">Shop Now</button></Link>
      </div>
      <div className="bg-black text-center mt-4">
        <h2 className="display-2 fw-bold text-white">Our Product <span className="secondary_text">Partners</span></h2>
      </div>
      <div className="text-center">
      <img src="https://ngratesc.sirv.com/Mashkay/products.png" className="img-fluid"/>

      </div>
    </main>
  );
}
