import React from "react";
import { Parallax, Background } from "react-parallax";

const image = "assets/img/coreteam/Members/team.jpg";
export default function Parallaxs() {
  return (
    <Parallax bgImage={image} strength={600}>
      <div className="header-filter" style={{ height: "80vh" }}></div>
    </Parallax>
  );
}
