import React from "react";
import "./HomeSecOne.css";

const HomeSecOne = (props) => {
  return (
    <section className="sec_two">
      <div className="container sec_two_con" style={props.dir ? FlexDir : FlexDirDef}>
        <div className="sec_two_con_left">
          <h1>{props.name}</h1>
          <h2>{props.title}</h2>
        </div>
        <div className="sec_two_con_right">
          <img src={props.img} />
        </div>
      </div>
    </section>
  );
};

let FlexDir = {
  flexDirection: "row-reverse",
};

let FlexDirDef = {
  flexDirection: "reverse",
};

export default HomeSecOne;
