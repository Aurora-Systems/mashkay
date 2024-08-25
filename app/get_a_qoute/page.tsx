export default function GetAQoute(){
    return(
        <div className="container mb-5">
            <div className="text-center mt-5">
                <h1 className="fw-bold display-2 text-black">Get A <span className="secondary_text">Qoutation</span></h1>
                <p>Quickly get information and pricing for the part you are looking for!</p>
            </div>
            <div className="bg-light p-3 rounded">

            <form action="">
                <div className="row">
                    <div className="col-sm mb-2">
                        <span>First Name</span>
                        <input type="text" name="first_name" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                        <span>Last Name</span>
                        <input type="text" name="last_name" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                        <span>Email</span>
                        <input type="email" name="email" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm  mb-2">
                        <span>Phone Number</span>
                        <input type="text" name="phone_number" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                        <span>Address</span>
                        <input type="text" name="address" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                        <span>City</span>
                        <input type="text" name="city" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm  mb-2">
                        <span>Province</span>
                        <input type="text" name="province" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                        <span>Postal Code</span>
                        <input type="text" name="postal_code" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                        <span>Country</span>
                        <input type="text" name="country" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm  mb-2">
                        <span>Please select your vehicle type</span>
                        <select className="form-control" name="vehicle_brand">
                            <option>Toyota</option>
                            <option>Ford</option>
                            <option>Mazda</option>
                            <option>Nissan</option>
                            <option>Mercedes Benz</option>
                            <option>CAT</option>
                            <option>Komatsu</option>
                            <option>Hitachi</option>
                            <option>Volvo</option>
                            <option>JCB</option>
                            <option>XCMG</option>
                            <option>Scania</option>
                            <option>Iveco</option>
                            <option>Marcopolo</option>
                            <option>Yutong</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm  mb-2">
                    <span>What year was your vehicle manufactured in?</span>
                    <input type="text" name="year" className="form-control"/>
                    </div>
                    <div className="col-sm  mb-2">
                    <span>Vehicle Identification Number | VIN ?</span>
                    <input type="text" name="vin" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm mb-2">
                        <span>Describe the part you want in detail</span>
                        <textarea className="form-control" name="description"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm text-center">
                        <button type="submit" className="btn secondary_button"> Request Qoutation</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}