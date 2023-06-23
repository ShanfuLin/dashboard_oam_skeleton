import { Component } from "react";
import MyNavBar from "./Navbar";

export default class PageContainer extends Component {

    render() {

        return (
            <div className="pagecontainer">
                <MyNavBar></MyNavBar>
                <div className="pagecontent">
                </div>
            </div >
        );
    }
}