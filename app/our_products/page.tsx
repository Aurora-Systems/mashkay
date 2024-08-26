"use client"
export default function OurProducts(){
    return(
        <div className="min-vh-100">
            <div className="text-center mt-5">
                <h1 className="fw-bold display-1 text-black">Our <span className="secondary_text"></span>Products</h1>
            </div>
            <div className="container">

            
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Find Part" />
                <button className="btn secondary_background text-white">Search</button>
            </div>
            <div className="results">

            </div>

            </div>
        </div>
    )
}