import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row mt-5 '>
                <h1 className='text-center'>Pricing</h1>
                <p className='text-center p-5  fs-5 text-muted border-bottom'> Free Equity investments and flat Rs.20 and F&O trades</p>
            </div>
            <div className='row text-center p-3'>
                <div className='col-4 p-4'>
                    <p><img src='media/images/pricing0.svg' /></p>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹
                        0 brokerage.
                    </p>
                </div>
                <div className='col-4 p-4'><p>
                    <img src='media/images/intradayTrades.svg' /></p>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades.
                    </p></div>
                <div className='col-4 p-4'>
                    <p>
                        <img src='media/images/pricing0.svg' />
                    </p>
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely free — ₹ 0
                        commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;