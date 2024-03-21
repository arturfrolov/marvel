import capitan from "../../resources/img/captain-america.png";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <div className="flex-wrapper" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="flex-col">
                    <h1 style={{marginBottom: '30px'}}>404 Page Not Found</h1>
                    <h4 className="dynamic-msg" style={{marginBottom: '30px'}}>HYDRA is currently attacking this page!</h4>
                    <p style={{marginBottom: '30px'}}>Check that you typed the address correctly, go back to your previous page or try using our
                        site search to find something specific.</p>
                    <Link
                        style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}}
                        to="/">
                        Back to main page
                    </Link>
                </div>
                <div className="flex-col-img">
                    <img src={capitan} alt="capitan_logo"/>
                </div>
            </div>
        </div>
    )
}

export default Page404;