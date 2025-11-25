import React, { useState } from "react";
import xHost from "../../api/axiosClient";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const redirectLogin=async ()=>{
   window.location.href = "/login";

}
const handleLogout = () => {
  // delete cookie
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  // redirect to login page
  window.location.href = "https://equityflow-stock-frontend.onrender.com/login";
};
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await xHost.post("/signup", {
        email,
        password,
      },{withCredentials :true});

      console.log("Signup success:", res.data);
      alert("Signup successful! Redirecting to login...");

      // Redirect to login page
      window.location.href = "/login";

    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };


    return (
       <>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1  className="mt-5 mb-5"style={{fontFamily:"poppins",color:"#003f66"}}>Create Your Account</h1>
                    <form onSubmit={handleSignup}>
                        <input type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             id="inputemail" 
                             className="form-control" />
                        <div id="inputemail" className="form-text" >
                        Enter your Email
                </div>
                <br></br><br></br>

                <input type="password" placeholder="Password (min 6 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="inputPassword5"
                    className="form-control"
                    aria-describedby="passwordHelpBlock"
                />
                <div id="passwordHelpBlock" className="form-text mb-5">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>

                <button className='btn p-2 btn-primary mb-5'type="submit"onClick={handleSignup}style={{ width: "20%", margin: "0 auto",backgroundColor:"#003f66" }}>SignUp Now</button>
                        <button className='btn p-2 btn-primary mb-5 mx-5'type="submit"onClick={redirectLogin}style={{ width: "20%", margin: "0 auto",backgroundColor:"#003f66" }}>Login</button>
                        {document.cookie.includes("token") && (
                <button className='btn p-2 btn-primary mb-5 mx-5'style={{ width: "20%", margin: "0 auto",backgroundColor:"#003f66" }}onClick={handleLogout}>Logout</button>)}
                 </form>
                  
          
        </div>
        
        </div >

      </div >
      </>
    )
   
  
}