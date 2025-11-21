import React, { useState } from "react";
import xHost from "../../api/axiosClient"; // adjust path if different

export default function Login({ setAccessToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await xHost.post("/auth/login", { email, password });

      // If backend returns accessToken (full auth), store it:
      if (res.data?.accessToken) {
        const token = res.data.accessToken;
        // If parent passed a setter, use it
        if (typeof setAccessToken === "function") setAccessToken(token);
        localStorage.setItem("accessToken", token);
      }

      // If backend only sets cookie and returns a message, we still redirect.
      alert(res.data?.message || "Login successful");
      // redirect to dashboard (dashboard runs on 3001 in your setup)
      window.location.href = "http://localhost:3001";
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.error || "Login failed");
    }
  };


  return (
    <>
    <div className="container">
      <div className="row">
       <div className="col-8 offset-2"> <h1 className="mb-5 mt-5"style={{fontFamily:"poppins",color:"#003f66"}}>Login Into Your Account</h1>
         <form onSubmit={handleLogin}>
                        <input  className="form-control"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<div className="text-muted fs-10">Enter your Email</div>
                        
               
                <br></br><br></br>

                 <input  className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

                <div id="passwordHelpBlock" className="form-text mb-5">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>

                <button className='btn p-2 btn-primary mb-5'type="submit"onClick={handleLogin}style={{ width: "20%", margin: "0 auto",backgroundColor:"#003f66" }}>Login</button>
                        
                 </form>
                 </div>
      </div>
      </div></>
  );
}