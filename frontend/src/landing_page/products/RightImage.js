import React from 'react';
function RightImage({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div className='container'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='mt-3'>{productDescription}</p>
                    <a href={tryDemo}className="" style={{ textDecoration: "none" }}>Try Demo{" "}
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore}className="mx-3" style={{ textDecoration: "none" }}>Learn More{" "}
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore}><img src='media/images/googlePlayBadge.svg'/></a>

                </div>
            </div>
        </div>
     );
}

export default RightImage;