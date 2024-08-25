import { bg_img } from "../components/css_functions";

export default function AboutUs() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center" style={{ ...bg_img("https://ngratesc.sirv.com/Mashkay/about_banner.jpg"), height: '90vh' }}>
                <div className="secondary_opacity_bg bg-opacity-75 rounded p-5">
                    <h1 className="text-white display-1 fw-bold">
                        About Us
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="text-center">
                    <h2 className="display-2 fw-bold text-black">
                        About Mashkay <span className="secondary_text">Autoparts</span>
                    </h2>
                    <p>Mashkay Autoparts is an Automotive Solutions provider, registered and
                        domiciled in Zimbabwe. The Company has more than three years in the
                        industry and has extremely done well in terms of the market share and service
                        quality. We respect our client&apos;s priorities and needs. We emphasize excellent
                        teamwork with our clients and together we can co- manage and co- create
                        solutions that ensure best customer value for their development budget within
                        the fastest possible time.As a business we strive to grow and mature through
                        excellent customer services by providing professional experience for all
                        customers in a friendly,respective and reactive manner in all our business
                        departments. “One part at a time with you in mind”</p>
                </div>
               
            </div>
            <div className="container-fluid">
                <div className="row mt-5 pt-5 bg-black">
                    <div className="col-sm text-white text-center">
                        <h1 className="fw-bold display-2">Our <span className="secondary_text">Mission</span></h1>
                        <p>Development of new products throughout. We deliver cost-effective and
quality guaranteed parts to set new benchmarks and provide
innovative,effective solutions to our esteemed customers.
Professinalism,Customer focus ,Commitment to teamwork and intergrity.</p>
                    </div>
                    <div className="col-sm d-flex align-items-center" >
                        <img src="https://ngratesc.sirv.com/Mashkay/4by4.png" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="text-center m-5 mb-5 mt-5">
                    <div>
                        <h2 className="display-2 fw-bold text-black"> Our <span className="secondary_text">Values</span></h2>
                    </div>
                    <div className="row gap-5">
                        <div className="col-sm secondary_background text-white rounded p-3">
                            <p className="fw-bold">Quality</p>
                            <p>We offer only the best parts from trusted manufacturers</p>
                            <img src="https://ngratesc.sirv.com/Mashkay/quality.png" className="img-fluid" alt="thumbs up"/>
                        </div>
                        <div className="col-sm secondary_background text-white rounded p-3">
                            <p className="fw-bold">Customer Service</p>
                            <p>Our knowledgeable team is here to assist you with any questions or concerns.</p>
                            <img src="https://ngratesc.sirv.com/Mashkay/customer_support.png" className="img-fluid" alt="thumbs up"/>
                        </div>
                        <div className="col-sm secondary_background text-white rounded p-3">
                            <p className="fw-bold">Dependable</p>
                            <p>Depend on us for timely deliveries and accurate information.</p>
                            <img src="https://ngratesc.sirv.com/Mashkay/trust.png" className="img-fluid" alt="thumbs up"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}