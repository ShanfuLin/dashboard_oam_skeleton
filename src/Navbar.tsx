import { useNavigate } from "react-router-dom";
import './Navbar.css'

const MyNavBar = () => {
    const navigate = useNavigate();

    const setPage = (event: any) => {
        let pagerequest = ""
        switch (event.target.className) {
            case "navtexthome":
            case "navbuttonhome":
                pagerequest = "/Home"
                break;
            case "navtextdiag":
            case "navbuttondiag":
                pagerequest = "/Diag"
                break;
            case "navtextue":
            case "navbuttonue":
                pagerequest = "/UE"
                break;
            case "navtextlinks":
            case "navbuttonlinks":
                pagerequest = "/links"
                break;
            default:
                pagerequest = "/Home"
        }
        navigate(pagerequest)
    }

    return (
        <div className="navcontainer">
            <div className="navbackground"></div>
            <div className="navgrouphome">
                <img className="navbuttonhome" id="navbuttonhomeid" src="/images/92C111E6-1D1B-4479-BC60-C657581071DB@3x.png" onClick={setPage}></img>
                <span className="navtexthome" id="navtexthomeid" onClick={setPage}>HOME</span>
            </div>
            <div className="navgroupdiag">
                <img className="navbuttondiag" id="navbuttondiagid" src="/images/92C111E6-1D1B-4479-BC60-C657581071DB@3x.png" onClick={setPage}></img>
                <span className="navtextdiag" id="navtextdiagid" onClick={setPage} >DIAG.</span>
            </div>
            <div className="navgroupue">
                <img className="navbuttonue" id="navbuttonueid" src="/images/92C111E6-1D1B-4479-BC60-C657581071DB@3x.png" onClick={setPage}></img>
                <span className="navtextue" id="navtextueid" onClick={setPage} >UE</span>
            </div>
            <div className="navgrouplinks">
                <img className="navbuttonlinks" id="navbuttonlinksid" src="/images/92C111E6-1D1B-4479-BC60-C657581071DB@3x.png" onClick={setPage}></img>
                <span className="navtextlinks" id="navtextlinksid" onClick={setPage}>LINKS</span>
            </div>
        </div>
    );
}

export default MyNavBar;
