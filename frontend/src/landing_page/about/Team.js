import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className='row border-top'>
                <h1 className='text-center mb-3 p-3  mt-5'>People</h1>
                <div className='col-6  p-5 text-center text-muted'>
                    <img src='media/images/people.jpg' className=' p-5 ml-5' style={{ borderRadius: '50%', height: '30rem' }} alt='Founder Image' />
                    <h5>Our Team</h5>
                    <p>Building EquityFlow together</p>
                </div>
                <div className='col-6  p-5 text-muted' style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <p className='mt-5'>
                        The people behind EquityFlow come from diverse backgrounds in technology, finance, design, and research. Together, we’re focused on building a trading experience that is simple, transparent, and powerful for every investor.


                    </p>
                    <p>
                       Our team works every day to improve the platform, enhance performance, and introduce features that help users make smarter decisions in the markets. We believe that technology should empower, not overwhelm — and that principle guides everything we build.

                    </p>
                    <p>From product development to customer support, every member of our team contributes to making EquityFlow a reliable, seamless, and investor-centric platform.</p>
                    <br></br><br></br>
                    <br></br>
                    <p >
                        Connect on <a href=""style={{textDecoration:'none'}}>Homepage</a> / <a href=""style={{textDecoration:'none'}}>TradingQnA</a> /{" "}
                        <a href=""style={{textDecoration:'none'}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;