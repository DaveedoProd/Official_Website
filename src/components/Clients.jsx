import React from 'react'
import { useRef } from 'react';
import AnimatedTitle from "./AnimatedTitle";
import './Clients.css';
import Marquee from 'react-fast-marquee';
import a from '../assets/Clients/1.png';
import b from '../assets/Clients/2.png';
import c from '../assets/Clients/3.png';
import d from '../assets/Clients/4.png';
import e from '../assets/Clients/5.png';
import f from '../assets/Clients/6.png';
import g from '../assets/Clients/7.png';
import h from '../assets/Clients/8.png';
import i from '../assets/Clients/9.png';
import j from '../assets/Clients/10.png';

const Clients = () => {
  const sponsorMarqueeRef = useRef(null);

  return (
    <div id='clients' className='clients-all'>
      <AnimatedTitle
        title="Clients and Friends"
        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
      />
      <div className='marquee'>
        <Marquee autoFill speed={150} ref={sponsorMarqueeRef} direction={'right'}>
          <div className='marquee-inner'>
            <div className='sponsors-box'>
              <img src={a} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={b} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={c} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={d} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={e} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={f} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={g} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={h} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={i} alt='' />
            </div>
            <div className='sponsors-box'>
              <img src={j} alt='' />
            </div>
          </div>
        </Marquee>
      </div >
    </div>
  )
}

export default Clients