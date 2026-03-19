import React from 'react';
import './Intro.css';
import bg from '../../assets/roddy.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className='introName'>Kamba</span> 
        <br />Software | Data Engineer </span>
        <p className="introPara">
          I build reliable software and data-driven solutions. I specialize <br /> in developing 
          responsive web applications and designing <br />
           efficient data systems that turn raw data into valuable insights.
        </p>
        <Link><button className="btn"><img src={btnImg} alt="btnImg" className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro
