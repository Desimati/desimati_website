"use client";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {


    return (
        <>
            <div>
                <img className='p-2 m-2' src="/Images/mainabout.png" alt="aboutus" width="100%" />
                <h1 className="p-2 m-3" style={{ color: "#7E4E00" }}>Our Mission</h1>
                <h6 className='p-2 m-2' style={{color:"#472401E5"}}>At <span style={{ color: "#472401" }}>Desimati</span>, we are reimagining how India buys and enjoys fruits and vegetables. By directly connecting farmers with consumers
                    and businesses, we cut out middlemen to deliver produce that is fresher, safer, and more affordable.
                    Our verticals are as follows :-</h6>
            </div>

         <div style={{margin:"5px"}}>
            <div className="row pt-2">
                <div className="col-6">
                    <img className='p-2 m-2' src="Images/mainabout2.png" alt="about" width="80%" />
                </div>
                <div className="col-6">
                    <p className='p-2 pt-4' style={{color:"#553500",marginTop:"20px"}}>By working closely with farmers and partners,
                        we ensure that quality produce reaches our customers in the freshest,fastest, and most sustainable way possible.
                        Our focus is not just on delivering fruits and vegetables,
                        but on nurturing trust, reducing waste, and creating value across the ecosystem.<br/><br/>
                        At Desimati, we believe that freshness is not a privilege—it’s a promise.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <p className='p-2 m-2' style={{color:"#553500",marginTop:"20px"}}>By working closely with farmers and partners,
                        we ensure that quality produce reaches our customers in the freshest,fastest, and most sustainable way possible.
                        Our focus is not just on delivering fruits and vegetables,
                        but on nurturing trust, reducing waste, and creating value across the ecosystem.<br/><br/>
                        At Desimati, we believe that freshness is not a privilege—it’s a promise.</p>
                </div>
                <div className="col-6">
                    <img style={{marginLeft:"20px"}} src="Images/mainabout4.png" alt="about" width="70%" />
                </div>
            </div><br/>

                <h1 className="p-2" style={{ color: "#7E4E00" }}>Our Vision</h1><br/>

            <div className="row">
                <div className="col-6">
                    <img className='p-2 m-2' src="Images/mainabout5.png" alt="about" width="80%" />
                </div>
                <div className="col-6">
                    <p style={{color:"#553500",marginTop:"20px"}}>By working closely with farmers and partners,
                        we ensure that quality produce reaches our customers in the freshest,fastest, and most sustainable way possible.
                        Our focus is not just on delivering fruits and vegetables,
                        but on nurturing trust, reducing waste, and creating value across the ecosystem.<br/><br/>
                        At Desimati, we believe that freshness is not a privilege—it’s a promise.</p>
                </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <p className='m-2 pt-3' style={{color:"#553500",marginTop:"20px"}}>By working closely with farmers and partners,
                            we ensure that quality produce reaches our customers in the freshest,fastest, and most sustainable way possible.
                            Our focus is not just on delivering fruits and vegetables,
                            but on nurturing trust, reducing waste, and creating value across the ecosystem.<br/><br/>
                            At Desimati, we believe that freshness is not a privilege—it’s a promise.</p>
                    </div>
                    <div className="col-6">
                        <img src="Images/mainabout6.png" alt="about" width="80%" />
                    </div>
                </div>
         </div>
            </>
            );
}
