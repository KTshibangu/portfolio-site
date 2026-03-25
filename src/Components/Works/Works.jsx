import React from 'react';
import './Works.css';
import Portfolio1 from '../../assets/music.jpg';
import Portfolio2 from '../../assets/education.jpg';
import Portfolio3 from '../../assets/food.jpg';
import Portfolio4 from '../../assets/analytics.jpg';
import Portfolio5 from '../../assets/machine.jpg';
import Portfolio6 from '../../assets/business.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
            Here are some of the projects I have worked on, demonstrating my skills in software development
            and data engineering. I focus on building scalable applications, intuitive user interfaces, and
            data-driven solutions that solve real-world problems.
        </span>
        <div className="worksImgs">
            <a
              href="https://sacrdc-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img src={Portfolio1} alt="Project" className="card-img" />

                <div className="card-body">
                  <h3 className="card-title">Full Stack Web App</h3>
                  <p className="card-text">
                    P.R.O system to handle song registration and royalty tracking using Typescript, node.js, express.js and MongoDB
                  </p>
                </div>
              </div>
            </a>
            
            <a
              href="https://sacrdc-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img src={Portfolio2} alt="Project" className="card-img" />

                <div className="card-body">
                  <h3 className="card-title">Full Stack Web App</h3>
                  <p className="card-text">
                    School management system web app using Typescript, node.js, express.js and MongoDB
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://sacrdc-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img src={Portfolio3} alt="Project" className="card-img" />

                <div className="card-body">
                  <h3 className="card-title">Full Stack Web App</h3>
                  <p className="card-text">
                    Food delivery web app using React, node.js, express.js and MongoDB
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/KTshibangu/Pizza-Sales-Report/blob/main/Home%20Tab.png"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img src={Portfolio4} alt="Project" className="card-img" />

                <div className="card-body">
                  <h3 className="card-title">Sales Report Analysis</h3>
                  <p className="card-text">
                    Used Excel for data cleaning and preparation, SQL for defining KPIs and metrics, Power BI for visualization
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/KTshibangu/loan-analysis/blob/main/Loan%20Analysis.ipynb"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img src={Portfolio5} alt="Project" className="card-img" />

                <div className="card-body">
                  <h3 className="card-title">Loan Analysis</h3>
                  <p className="card-text">
                    Used Python, pandas, numpy for data cleaning and data analysis
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://sacrdc-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <div className="card">
                <img src={Portfolio6} alt="Project" className="card-img" />

                <div className="card-body">
                  <h3 className="card-title">Loan Assessment Analysis</h3>
                  <p className="card-text">
                    Analyzed good and bad loans for a bank by using Python, pandas, numpy
                  </p>
                </div>
              </div>
            </a>
        </div>
    </section>
  )
}

export default Works
