import Image from "next/image";
function Footer() {
    return (
        <footer>
            <br />
            <div className="container-fluid">
                <div className="row">
                    <p className="col-5 " align="right">
                        <a href="https://www.facebook.com/"><Image src="/images/facebook.png" className="logoReso" alt="facebook" width={22} height={22}/></a>
                    </p>
                    <p className="col-2 text-center">
                        <a href="https://twitter.com/?lang=fr"><Image src="/images/twitterLogo.png" className="logoReso" alt="twitter" width={22} height={22}/></a>
                    </p>
                    <p className="col-5">
                        <a href="https://www.instagram.com/"><Image src="/images/inLogo.png" className="logoReso" alt="In" width={22} height={22}/></a>
                    </p>
                </div>
                <br /> 
                <div className="row text-center">
                    <p>📍Canada @2024 Reinold, Inc Tous droit reservé</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;