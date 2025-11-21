import React from 'react';
function Hero() {
    return ( 
        <div className='container mt-5 '>
            <div className='row text-center'>
                <h1>Technology</h1>
                <h3 className='mt-3 text-muted'>Sleek,modern and intuitive trading platforms</h3>
                <p className='mt-3 text-muted'>Check out for <a href="" className="" style={{ textDecoration: "none" }}>
                                investment offerings{" "}
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a></p>
            </div>
        </div>
    );
}

export default Hero;