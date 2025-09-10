'use client';
import './../Style/ClientReview.css';
import Image from 'next/image';

export default function ClientReview() {
    return (
        <section className="clientreview-section container-fluid px-4">
            <div className="section-heading">
                <h2 className="section-title">Client Review</h2>
                <Image
                    src="/Images/heading.png"
                    alt="Decor"
                    className="section-decor"
                    width={60}
                    height={50}
                />
            </div>
            
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                    <Image
                        src="/Images/swiggy (2).png"
                        alt="Client Review"
                        className="clientreview-image"
                        width={400} 
                        height={300} 
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <Image
                        src="/Images/blinkit (3).png"
                        alt="Client Review"
                        className="clientreview-image"
                        width={400} 
                        height={300} 
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <Image
                        src="/Images/insta.png"
                        alt="Client Review"
                        className="clientreview-image"
                        width={400} 
                        height={300} 
                    />
                </div>
            </div>
        </section>
    );
}
