import { bg_img } from "@/app/components/css_functions"


export default function FBYF(){
    return(
        <div className="mt-5">
            
        <div className="container">

        <div className="row ">
            <div className="col-sm text-center">
                <h4>4x4 Vehicle Parts and Accesories
                </h4>
                <p>
                At Mashkay Autoparts, we understand the unique demands of 4x4 vehicles. Whether you’re driving off-road or navigating tough terrain, your vehicle needs reliable, high-performance parts to handle the challenges. We offer a comprehensive range of parts specifically designed for 4x4 vehicles, ensuring strength, durability, and performance for all your adventures.
                </p>
                <p className="fw-bold">
                Our 4x4 vehicle parts range includes



                </p>
                <div className="row gap-2"> 
                    <div className="col-sm card mb-2">
                        <div className="secondary_background w-100 rounded-bottom">
                            <span className="text-white fw-bold">Body Parts & Accesories</span>
                        </div>
                        <div style={{...bg_img("https://cdn.clipond.com/Mashkay/toyota-hilux-revo-rocco-2015-2019-full-body-kit-to-2021-invincible-3.jpg"), height:"45vh"}}>
                        </div>
                        <br/>
                        <p>
                            We offer a wide variety of body parts to keep your 4x4 looking sharp and functional. From fenders, hoods, and bumpers to doors and grilles, our body parts ensure a perfect fit and lasting durability. Additionally, we offer a range of accessories such as roof racks, fender flares, side steps, and mud flaps, giving you the ability to personalize and protect your 4x4 for any adventure. 
                        </p>
                        <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on your 4x4 Body parts and accesories?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>
                    </div>
                    <div className="col-sm card mb-2">
                    <div className="secondary_background w-100 rounded-bottom">
                            <span className="text-white fw-bold">Engine Parts</span>
                        </div>
                        <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/intricate-arrangement-automotive-engine-components-displayed-neutral-background-transparent-png-background_94628-97333.jpg"),height:"45vh"}}>
                        </div>
                        <br/>
                        <p>                       
                        Get the most out of your 4x4’s power with our high-quality engine parts. From turbochargers and air filters to pistons and gaskets, our products are designed to maximize performance, even under heavy loads and tough conditions.
                        </p>
                        <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on 4x4 engine parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                    </div>
                    </div><div className="row gap-2">
                    <div className="col-sm card mb-3">
                    <div className="secondary_background w-100 rounded-bottom">
                            <span className="text-white fw-bold">Suspension Parts</span>
                        </div>
                        <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/sus4.png"),height:"45vh"}}>
                        </div>
                        <br/>
                        <p>
                        Off-road driving demands a rugged suspension system. We supply shock absorbers, coil springs, control arms, and suspension bushings designed to provide stability and comfort on rough terrain. Whether you’re upgrading for better ground clearance or simply maintaining your vehicle, we’ve got the parts you need.             
                        </p>
                        <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on 4x4 suspension parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                    </div> 
                    <div className="col-sm card mb-3">
                    <div className="secondary_background w-100 rounded-bottom">
                            <span className="text-white fw-bold">Electrical Parts</span>
                        </div>
                        <div style={{ ...bg_img("https://cdn.clipond.com/Mashkay/4x4el.png"),height:"45vh"}}>
                        </div>
                        <br/>
                        <p>
                        Power through any adventure with our robust electrical components for 4x4 vehicles. Whether it&apos;s alternators, starters, ignition systems, or wiring harnesses, our parts are engineered to perform in the toughest off-road conditions. Designed for durability and reliability, these components ensure your 4x4 is ready for rugged terrains, providing consistent power and performance when you need it most.            
                        </p>
                        <a href="https://wa.me/263782255545?text=Good day, could i get more infomartion on 4x4 electrical parts?" target="_blank"><button className="btn secondary_button text-white mb-2">Get Parts</button></a>

                    </div> 
                  

                    </div>
            </div>
           
        </div>
        </div>

    </div>
    )
}
