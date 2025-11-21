import React from 'react';
function PricingSection() {
    return (  
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4 '>
                    <h1 className='mb-5 fs-2 '>Unbeatable Pricing</h1>
                    <p className=''>We pioneered the concept of discount broking and price <br></br>transparency
            in India. Flat fees and no hidden charges.</p>
            <a href="" className="" style={{ textDecoration: "none" }}>
                                See pricing{" "}
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>

                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col text-center border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and
                <br />
                direct mutual funds</p>
                        </div>
                        <div className='col text-center border p-3'>
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default PricingSection;