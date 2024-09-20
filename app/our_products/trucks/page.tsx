import { bg_img } from "@/app/components/css_functions";

export default function Trucks(){
    return(
        <div className="mt-5">
            
            <div className="container">

            <div className="row ">
                <div className="col-sm text-center">
                    <h4>Truck Parts & Accesories</h4>
                    <p>
                    At Mashkay Autoparts, we offer a comprehensive range of truck parts to ensure your vehicles are running smoothly and efficiently. Whether you’re maintaining a fleet or a single vehicle, we stock high-quality, durable components designed for long-haul performance. Our truck parts selection covers various brands and models, guaranteeing compatibility and reliability.
                    </p>
                    <p className="fw-bold">
                    Our truck parts range includes


                    </p>
                    <div className="row gap-2"> 
                        <div className="col-sm card mb-2">
                            <div className="secondary_background w-100 rounded-bottom">
                                <span className="text-white fw-bold">Truck Engine Parts</span>
                            </div>
                            <div style={{...bg_img("https://ngratesc.sirv.com/Mashkay/truck.png"), height:"45vh"}}>
                            </div>
                            <br/>
                            <p>
                                From pistons and crankshafts to fuel injectors and timing belts, we have everything you need to keep your truck’s engine in peak condition. We offer parts for a variety of diesel engines, ensuring maximum performance and fuel efficiency.
                            </p>
                            <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your engine parts?" target="_blank"><button className="btn secondary_background text-white mb-2">Get Truck Engine Parts</button></a>
                        </div>
                        <div className="col-sm card mb-2">
                        <div className="secondary_background w-100 rounded-bottom">
                                <span className="text-white fw-bold">Truck Body Parts</span>
                            </div>
                            <div style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/truck_parts.png"),height:"45vh"}}>
                            </div>
                            <br/>
                            <p>                            Need to replace worn-out or damaged truck body components? We supply everything from bumpers and hoods to mirrors and doors. Each part is sourced from reputable manufacturers to ensure durability and a perfect fit for your truck model.
                            </p>
                            <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your truck body parts?" target="_blank"><button className="btn secondary_background text-white mb-2">Get Truck Body Parts</button></a>

                        </div>
                        </div><div className="row gap-2">
                        <div className="col-sm card mb-3">
                        <div className="secondary_background w-100 rounded-bottom">
                                <span className="text-white fw-bold">Truck Suspension Parts</span>
                            </div>
                            <div style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/Heavy-Duty-Trailer-America-Type-Trailer-Parts-Truck-Mechanical-Trailer-Suspension-for-Kit.webp"),height:"45vh"}}>
                            </div>
                            <br/>
                            <p>                         Our suspension systems and components are built to handle the toughest conditions. Whether you&apos;re driving on rough terrain or heavy-duty roads, our range of shocks, springs, control arms, and bushings ensures your truck remains stable and secure.
                            </p>
                            <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your truck suspension parts?" target="_blank"><button className="btn secondary_background text-white mb-2">Get Truck Suspension Parts</button></a>

                        </div> 
                        <div className="col-sm card mb-3">
                        <div className="secondary_background w-100 rounded-bottom">
                                <span className="text-white fw-bold">Truck Braking Systems</span>
                            </div>
                            <div style={{...bg_img("https://ngratesc.sirv.com/Mashkay/Brake-Pad-Replacement-Commercial-Vehicle-L-Truck-Brake-Pad-Front-and-Rear-Bus-Braking-System.webp"),height:"45vh"}}>
                            </div>
                            <br/>
                            <p>
                            Safety is paramount, and we offer a full range of brake pads, discs, calipers, and hoses. Our products are designed for heavy-duty trucks, providing reliable stopping power even under the most demanding loads.
                            </p>
                            <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your breaking systems?" target="_blank"><button className="btn secondary_background text-white mb-2">Get Truck Braking Systems</button></a>
                        </div>
                        </div><div className="row">
                        <div className="col-sm card mb-3">
                        <div className="secondary_background w-100 rounded-bottom">
                                <span className="text-white fw-bold">Trailer Parts</span>
                            </div>
                            <div style={{...bg_img("https://ngratesc.sirv.com/Mashkay/Vehicle-Master-30-40-50-60-70-80-Tons-2-3-4-Axles-20-40-45FT-Flatbed-Container-Truck-Semi-Trailer.webp"), height:"30vh"}}>
                            </div>
                            <br/>
                            <p>
                            We also supply a wide range of trailer parts, including axles, braking systems, and lighting kits. Keep your trailer safely attached and roadworthy with our top-grade towing components, hitches, and couplers.

                            </p>
                            <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your trailer parts?" target="_blank"><button className="btn secondary_background text-white mb-2">Get Trailer Parts</button></a>

                        </div>
                        <div className="col-sm mb-3"></div>
                    </div>
                </div>
               
            </div>
            </div>

        </div>
    )
}