import React from 'react';
function Education() {
    return ( 
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 mt-5'>
                <img src='media/images/education.svg'/>
            </div>
            <div className='col-6 mt-5'>
                <h1 className='fs-2 mb-5'>Free and open market education</h1>
                
            <div className="mb-5">
                <p>Varsity, the largest online stock market education book in the world<br></br>
            covering everything from the basics to advanced trading.</p>
            <a href=""  style={{ textDecoration: "none",color:"003f66" }}>
                                Varsity{" "}
                                <i class="fa fa-long-arrow-right"style={{color:"003f66"}} aria-hidden="true"></i>
                            </a>
            </div>
            <div>
                <p>TradingQ&A, the most active trading and investment community in
            India for all your market related queries.</p>
            <a href="" className="" style={{ textDecoration: "none" }}>
                                TradingQ&A{" "}
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
            </div>
            
            </div>
        </div>
    </div>
    );
}

export default Education;