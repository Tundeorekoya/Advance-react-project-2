
import React from "react";
import "./headers.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Headers = () => {
  return (
    <div className="gtp3__header section__padding" id="home">
      <div className="gtp3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. indulgence way everything joy
          alteration boisterous the attachment. we years to allow asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button"> Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt={ai} />
      </div>
    </div>
  );
};

export default Headers;
