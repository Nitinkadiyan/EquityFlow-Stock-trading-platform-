import React from "react";
import LogoIcon from "./LogoIcon";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top ">
        <div className="row mt-5">
          <div className="col">
            <div> <LogoIcon size={30} color="#2BC0A4" />
             <span className="navbar-logo">EquityFlow</span></div> 
            <p>
              &copy; 2010 - 2024,<br></br> Not EquityFlow Broking Ltd.<br></br> All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            
          <div ><a  style={{textDecoration:"none",color:"#59545A"}}href="">About</a></div>
            <br />
            <div><a className="mb-5"style={{textDecoration:"none",color:"#59545A"}}href="">Products</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Pricing</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Referral programme</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Careers</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">EquityFlow.tech</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Press & media</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">EquityFlow cares (CSR)</a></div>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Contact</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Support portal</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Z-Connect blog</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">List of charges</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Downloads & resources</a></div>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <div><a className="mt-5"style={{textDecoration:"none",color:"#59545A"}}href="">Open an account</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">Fund transfer</a></div>
            <br />
            <div><a style={{textDecoration:"none",color:"#59545A"}}href="">60 day challenge</a></div>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            EquityFlow Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through EquityFlow Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through EquityFlow Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: EquityFlow Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@EquityFlow.com, for DP related to dp@EquityFlow.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of EquityFlow and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;