import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid'id="supportHero" >

        <div className='row p-3'>
            <div className='col-6 p-5'>
                <h4 >Support Portal</h4><br></br><br></br>
                <h2>Search for an answer or browse help topics to create a ticket</h2>
                <input placeholder='Eg:how do i activate F&O, why is my order getting rejected' style={{width:"37rem",height:"4rem",fontSize:"0.95rem"}}/>
                 <br></br>
                  <a href="">Track account opening</a> &nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;
            </div>
            <div className='col-6 p-5'>
                <a href=""className='offset-6'>Track Tickets</a> 
                <br></br><br></br><br></br>
                 <h1 className="fs-3 p-2">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br></br>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
            </div>
        </div>
        </div>
     );
}

export default Hero;