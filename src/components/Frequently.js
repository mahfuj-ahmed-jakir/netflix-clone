import React, { useState } from "react";
import "./Frequently.css";
import { FaPlus } from "react-icons/fa";

const Frequently = () => {
  const [faqQueShow, setFaqQueShow] = useState(false);

  return (
    <section className="faq-que-sec">
      <div className="container">
        <div className="faq-que">
          <h1>Frequently Asked Questions</h1>
          <li className="faq-que-li">
            <button onClick={() => setFaqQueShow(!faqQueShow)}>
              What is Netflix? <FaPlus />
            </button>
            {faqQueShow ? (
              <div className="faq-que-active">
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br />
                <br /> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
              </div>
            ) : null}
          </li>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
