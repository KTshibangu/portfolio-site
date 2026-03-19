import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About What I do</span>
        <span className="skillDesc">
            I am passionate about building modern web applications and working with data. 
            I focus on developing clean, efficient, and scalable solutions that provide great user experiences and valuable insights from data.
            I have strong experience in <span className='skillCert'>JavaScript, React, Python, SQL, Power BI, Machine Learning</span> and I enjoy creating responsive and user-friendly 
            interfaces while also working with data systems and analytics.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>
                        I design and develop modern, responsive websites that are fast, visually appealing, and easy to use. 
                        My goal is to create web applications that provide excellent user experiences across all devices.
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Application Dev</h2>
                    <p>
                        I build web applications using modern technologies and frameworks. 
                        I focus on creating scalable, maintainable, and high-performance applications that solve real-world problems.
                    </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Data Analytics</h2>
                    <p>
                        I design and manage data pipelines, I analyze and transform data to extract meaningful insights that support better decision-making. 
                        I work with data processing, visualization, and analytics to turn raw data into useful information.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
