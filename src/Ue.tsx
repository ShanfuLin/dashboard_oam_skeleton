import React from "react";
import MyNavBar from "./Navbar";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const UE_page = () => {
    return (
        <div className="pagecontainer">
            <MyNavBar></MyNavBar>
            <div className="pagecontent">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React </h1>
                <div>
                    <h1>UE Page</h1>
                </div>
            </div>
        </div>
    );
};

export default UE_page;