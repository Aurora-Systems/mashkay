import { bg_img } from "@/app/components/css_functions"
export default function Buses() {
    return (
        <div className="mt-5">

            <div className="container">

                <div className="row ">
                    <div className="col-sm text-center">
                        <h4>Bus Parts and Accesories
                        </h4>
                        <p>

                            At Mashkay Autoparts, we understand the importance of keeping buses on the road, whether for public transportation, private tours, or long-distance travel. That’s why we offer a wide range of top-quality parts for buses, ensuring safety, performance, and comfort for both drivers and passengers. Our bus parts are sourced from trusted manufacturers to provide durability and compatibility with a wide range of bus models.                </p>
                        <p className="fw-bold">
                            Our bus parts range includes
                        </p>
                        <div className="row gap-2">
                        <div className="col-sm card mb-3">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Body Parts</span>
                                </div>
                                <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/bus_parts_1.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>
                                    Maintain the appearance and structural integrity of your buses with our wide selection of body parts. From mirrors, bumpers, and doors to windshields and side panels, we provide everything needed to keep your bus fleet in top condition.
                                </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your bus body parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>
                            </div>
                            <div className="col-sm card mb-2">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Engine Parts</span>
                                </div>
                                <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/busengine.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>
                                    Ensure your bus runs smoothly and efficiently with our selection of engine components. From pistons and valves to oil pumps and fuel injectors, our parts are designed for high-mileage buses and offer the durability needed for extended use.     </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on bus engine parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>
                            </div>
                        
                        </div><div className="row gap-2">
                            <div className="col-sm card mb-3">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Suspension Components</span>
                                </div>
                                <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/bus_sus.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>
                                    Comfort and stability are key for passenger transport. We provide a wide range of suspension parts, including shock absorbers, leaf springs, and control arms, to ensure a smooth ride, even on rough roads.                        </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on bus suspension  parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                            </div>
                            <div className="col-sm card mb-3">
                                <div className="secondary_background w-100 rounded-bottom">
                                    <span className="text-white fw-bold">Electrical Parts</span>
                                </div>
                                <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/busel.png"), height: "45vh" }}>
                                </div>
                                <br />
                                <p>
                                Maintain safe and reliable bus operations with our premium electrical components. We supply everything from alternators and starters to lighting systems, wiring, and control modules, ensuring that your buses remain operational and efficient. Our electrical parts are built to handle the high demands of daily transit, providing consistent power.                   </p>
                                <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on bus electrical  parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                            </div>
                            
                         
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
