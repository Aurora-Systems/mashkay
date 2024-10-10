import { bg_img } from "@/app/components/css_functions";

export default function Trucks() {
    return (
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
                                <div style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/X15N_filterupdate.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>
                                    From pistons and crankshafts to fuel injectors and timing belts, we have everything you need to keep your truck’s engine in peak condition. We offer parts for a variety of diesel engines, ensuring maximum performance and fuel efficiency.
                                </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on truck engine parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>
                            </div>
                            <div className="col-sm card mb-2">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Truck Body Parts</span>
                                </div>
                                <div style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/truck_parts.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>                            Need to replace worn-out or damaged truck body components? We supply everything from bumpers and hoods to mirrors and doors. Each part is sourced from reputable manufacturers to ensure durability and a perfect fit for your truck model.
                                </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your truck body parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                            </div>
                        </div><div className="row gap-2">
                            <div className="col-sm card mb-3">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Truck Suspension & Trailer Parts</span>
                                </div>
                                <div style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/trailer_sus.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>                         Our suspension systems and components are built to handle the toughest conditions. Whether you&apos;re driving on rough terrain or heavy-duty roads, our range of shocks, springs, control arms, and bushings ensures your truck remains stable and secure.
                                </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on  truck suspension parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                            </div>
                            <div className="col-sm card mb-3">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Truck Electrical Parts</span>
                                </div>
                                <div style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/man-engines-sustainability-mtb-batterien4-4x3_width_800_height_600.jpg"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>       
                                     From alternators and starters to batteries, wiring harnesses, and fuses, we provide everything you need to ensure smooth electrical operation. Our parts are designed to withstand tough road conditions and heavy usage, offering long-lasting performance and reliability for all types of trucks.
                                </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on  truck suspension parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                            </div>
                        </div><div className="row">


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}