"use client"
import { useState } from "react";
export default function Trucks() {
    const [selected_pdf,set_selected_pdf] = useState<string>("https://ngratesc.sirv.com/Mashkay/DAF-Catalogue-pdf%20(1).pdf")
    return (
        <div className="mt-5">

            <div className="container">

                <div className="row ">
                    <div className="col-sm text-center">
                        <h4>Truck Parts & Accesories</h4>
                        <p>
                            At Mashkay Autoparts, we offer a comprehensive range of truck parts to ensure your vehicles are running smoothly and efficiently. Whether you’re maintaining a fleet or a single vehicle, we stock high-quality, durable components designed for long-haul performance. Our truck parts selection covers various brands and models, guaranteeing compatibility and reliability.
                        </p>

                        <div className="d-flex flex-row justify-content-center mb-3">
                            <span>View Catalogue for &nbsp;</span>
                            <select className=" border rounded" onChange={(e)=>set_selected_pdf(e.target.value)}>
                                <option value="https://ngratesc.sirv.com/Mashkay/DAF-Catalogue-pdf%20(1).pdf">DAF</option>
                                <option value="https://ngratesc.sirv.com/Mashkay/Volvo-Catalogue-pdf.pdf">Volvo</option>
                                <option value="https://ngratesc.sirv.com/Mashkay/Iveco-Catalogue-Combined_compressed.pdf%20(1).pdf">IVECO</option>
                                <option value="https://ngratesc.sirv.com/Mashkay/Scania-Catalogue-Combined_compressed.pdf%20(1).pdf">Scania</option>
                                <option value="https://ngratesc.sirv.com/Mashkay/Mercedes-Catalogue-Combined_compressed.pdf%20(1).pdf">Mercedes Benz</option>
                                <option value="https://ngratesc.sirv.com/Mashkay/MAN-Catalogue-pdf%20(1)_1.pdf">MAN</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className=" vh-100">
                    <embed className="w-100 vh-100 h-100" src={selected_pdf}></embed>
                </div>
            </div>

        </div>
    )
}