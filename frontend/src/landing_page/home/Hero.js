import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 mt-5 '>
            <div className='row text-center border-bottom'>
                <img src='media/images/homeHero.png' alt='hero image' className='mb-5' />
                <h1 className='mt-5 '>Invest In Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
              <button className='btn p-2 btn-primary mt-2 mb-5'style={{ width: "20%", margin: "0 auto",backgroundColor:"#003f66" }}>SignUp Now</button>
            </div>
        </div>
    );
}

export default Hero;