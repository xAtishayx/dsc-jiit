import React from 'react';
import Link from '../src/Link';
import { Parallax, Background } from 'react-parallax';
const image="assets/img/mac.jpg"
export default function Parallaxs() {
  return (
<Parallax bgImage={image} strength={400}>
      <div style={{ height: 500 }}>
      </div>
    </Parallax>
  );
}