import React from 'react';
import Dashboard from './Dashboard.js';
import TopBar from './TopBar.js';

function Home() {
    useEffect(() => {
  axios
    .get("https://equityflow-stock-backend.onrender.com/api", {
      withCredentials: true,
    })
    .then((res) => {
      console.log("User authenticated:", res.data);
    })
    .catch((err) => {
      console.log("Not authenticated, redirecting...");
      window.location.href = "https://equityflow-stock-frontend.onrender.com/login";
    });
}, []);
    return ( 

        <>
        <TopBar/>
        <Dashboard/>
        </>
     );
}

export default Home;