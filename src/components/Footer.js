import logo from "../assets/rdc-redbus-logo.svg";
import insta from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" py-0 bg-whitesmoke-200 pb-8 w-full">
      <img
        src={logo}
        alt="f-logo"
        height="140"
        width="140"
        className="mx-auto md:mx-0 mt-4 justify-center"
      />

      <div className="md:grid grid-cols-3">
        <div className="grid p-2 m-2 justify-between">
          <p className="mb-1">When you have a choice choose Redbus.</p>
          <p className="mb-1">
            Redbus offers nus tickets booking through its website, IOS, and
            android mobile apps for all major cities.
          </p>
          <p>Redbus.bus@redbus.com</p>
        </div>

        <div className="p-2 m-2">
          <label className="font-semibold">About</label>
          <p>
            <Link to="">Contact US</Link>
          </p>
        </div>

        <div className="p-2 m-2 flex flex-col">
          <label className="font-semibold">Follow Us</label>
          <div className="pt-2">
            <a href="https://www.instagram.com/accounts/login/?next=/redbusindia/">
              <img src={insta} alt="" />
            </a>
            <a href="https://www.facebook.com/redbus.in/">
              <img src={facebook} className="pl-2" alt=""/>
            </a>
          </div>
        </div>
      </div>
      <p className="container text-center">
        {" "}
        Ⓒ 2023 Redbus India Pvt Ltd. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
