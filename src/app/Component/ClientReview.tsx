'use client';
import './../Style/ClientReview.css';

export default function ClientReview() {
    return (
        <section className="clientreview-section container-fluid px-4">
            <div className="section-heading">
                <h2 className="section-title">Client Review</h2>
                <img src="/Images/heading.png" alt="Decor" className="section-decor" />
            </div>
            
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                    <img
                        src="/Images/swiggy.png"
                        alt="Client Review"
                        className="clientreview-image"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src="/Images/blinkit (2).png"
                        alt="Client Review"
                        className="clientreview-image"
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src="/Images/reliance (2).png"
                        alt="Client Review"
                        className="clientreview-image"
                    />
                </div>
            </div>
        </section>
    );
}
