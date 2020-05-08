import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image="assets/img/coreteam/Members/dsc_lead.jpg"
export default function Parallaxs() {
  return (
<Parallax bgImage={image} strength={400}>
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
  );
}