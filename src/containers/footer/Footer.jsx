
import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer gpt3__footer__heading">
        <h1 className="gradient__text ">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>GreenField K12 LR All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-link_div">
          <h4>link</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-link_div">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-link_div">
          <h4>Get in Touch</h4>
          <p>GreenField K12 LR 210 K12 LR Moore Road</p>
          <p>+123-456-789</p>
          <p>info@payment-gateway.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p> ©2023 GPT3. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
