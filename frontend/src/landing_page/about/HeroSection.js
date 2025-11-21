import React from 'react';
function HeroSection() {
    return ( <>
    <div className='container'>
        <div className='row  mt-5 mb-5 '>
            <h1 className='text-center mt-4 fs-2 mb-5'>We are building India’s most investor-friendly trading experience.

          <br /><br/>
         From powerful tools to transparent pricing, EquityFlow is designed to help every Indian invest smarter.</h1>


        </div>
        <div className='row mt-5 border-top  ' style={{lineHeight:'1.8',fontSize:'1.2rem'}}>
            <div className='col-6 mt-5 text-muted p-5'>
                <p>
           At EquityFlow, we started with one simple vision —
to make investing in India effortless, transparent, and accessible for everyone.

          </p>
          <p>
            The Indian markets are evolving faster than ever, yet most platforms still make trading complicated, expensive, or overwhelming for beginners.
We wanted to change that.

          </p>
          <p>
           So we built EquityFlow — a clean, fast, modern platform where investors can focus purely on making better decisions, not fighting with bad UI, delays, or hidden fees.

          </p>
          <p>India’s growth story is just getting started — and we want every investor to be part of it.
</p></div> 
            <div className='col-6 mt-5 text-muted p-5'>
                <p>
            EquityFlow is built to bridge that gap.<br></br><br></br>

✔ Real-time market data<br></br>
✔ Smooth order execution<br></br>
✔ Beginner-friendly insights<br></br>
✔ Powerful tools for serious traders<br></br>
✔ Zero clutter. Zero confusion. Just clarity.<br></br>

          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
           We’re just getting started.

As we continue to build new features, improve performance, and expand our ecosystem, one thing will always stay constant:

EquityFlow exists to make investing simpler, fairer, and more empowering for every Indian.
          </p>
            </div>
        </div>
    </div>
    
    
    </> );
}

export default HeroSection;