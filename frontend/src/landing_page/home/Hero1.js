import React from 'react';
function Hero1() {

    const handleExploreDashboard = () => {
  if (document.cookie.includes("token")) {
    // user is logged in
    window.location.href = "http://localhost:3001";
  } else {
    // user NOT logged in
    window.location.href = "/signup";
    alert("To explore Stocks, You must create an account");

  }
};
    return ( 
        <>
        <div className='container  p-3'>
            <div className='row   text-center'>
                  <h1 style={{fontSize:"4rem",fontFamily:"Poppins",color:"#003f66"}} className='mt-5'>Invest with Clarity.<br></br>Groww with confidence.</h1>
                  <p className='text-muted mt-5'style={{fontSize:"1.6rem",fontFamily:"Poppins"}}>"With powerful analytics,secure trading, and a smooth user experience,<br></br> EquityFlow helps you stay ahead -even when the markets don't play nice"</p>
            <button className='btn p-2 fs-5 mt-5 mb-5'onClick={handleExploreDashboard}style={{ width: "20%", margin: "0 auto",backgroundColor:"#003f66",color:"white" ,fontFamily:"Poppins"}}>Explore Stocks' World</button>
            </div>
        </div>
        </>
     );
}

export default Hero1;