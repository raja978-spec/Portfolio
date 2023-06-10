import React  from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './App'

const Service=()=>{

  return(
  <section class="section" id="service">
      <div class="container text-center">
          <p class="section-subtitle">What I Do?</p>
          <h6 class="section-title mb-6">Projects</h6>
          <div class="row">
              <div class="col-lg-6 col-lg-3">
                  <div class="service-card">
                      <div class="body">
                          <img src="assets/imgs/responsive.svg" alt="Python project" class="icon"></img>
                          <h6 class="title">Python project</h6>
                          <p class="subtitle">I have proficiently executed numerous projects in Django, encompassing the integration of machine learning concepts. Notably, within these projects, I have incorporated a sentiment analysis component that effectively discerns positive and negative sentiments within textual data.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-lg-3">
                  <div class="service-card">
                      <div class="body">
                          <img src="assets/imgs/responsive.svg" alt="ASP Project" class="icon"></img>
                          <h6 class="title">ASP project</h6>
                          <p class="subtitle">I have developed several exemplary ASP projects encompassing the fundamentals of ASP.NET programming, as well as constructing a sophisticated MVC-based website in .NET.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-lg-3">
                  <div class="service-card">
                      <div class="body">
                          <img src="assets/imgs/responsive.svg" alt="Andriod project" class="icon"></img>
                          <h6 class="title">Andriod project</h6>
                          <p class="subtitle">The app created for by dad's use</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-lg-3">
                  <div class="service-card">
                      <div class="body">
                          <img src="assets/imgs/analytics.svg" alt="MERN stach website" class="icon"></img>
                          <h6 class="title">Full Stack Website</h6>
                          <p class="subtitle"></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
  }
  ReactDOM.render(<Service></Service>,document.getElementById('Service'))


  const Portfolio=()=>
  {
  return(
  <section class="section" id="portfolio">
  <div class="container text-center">
      <p class="section-subtitle">What I Did ?</p>
      <h6 class="section-title mb-6">Portfolio</h6>
      <h6 class="section-title mb-6">Sample output of my projects</h6>
     
      <div class="row">
          <div class="col-md-4">
              <a href="assets/imgs/Python.jpg" class="portfolio-card">
                  <img src="assets/imgs/Python.jpg" class="portfolio-card-img" alt=""></img>
                  <span class="portfolio-card-overlay">
                      <span class="portfolio-card-caption">
                          <h4>Python project</h4>
                          <p class="font-weight-normal">Click to see</p>
                      </span>                         
                  </span>                     
              </a>
          </div>
          <div class="col-md-4">
              <a href="assets/imgs/folio-2.jpg" class="portfolio-card">
                  <img class="portfolio-card-img" src="assets/imgs/folio-2.jpg" class="img-responsive rounded" alt=""></img>
                  <span class="portfolio-card-overlay">
                      <span class="portfolio-card-caption">
                          <h4>Fullstack website</h4>
                          <p class="font-weight-normal">Click to see</p>
                      </span>                         
                  </span>                         
              </a>
          </div>
          <div class="col-md-4">
              <a href="assets/imgs/Andriod.jpg" class="portfolio-card">
                  <img class="portfolio-card-img" src="assets/imgs/Andriod.jpg" class="img-responsive rounded" alt=""></img>    
                  <span class="portfolio-card-overlay">
                      <span class="portfolio-card-caption">
                          <h4>Andriod App</h4>
                          <p class="font-weight-normal">Click to see</p>
                      </span>                         
                  </span>                     
              </a>
          </div>
      </div>
  </div>
  </section> 
  )
  }
  ReactDOM.render(<Portfolio></Portfolio>,document.getElementById('Port'))
  
  
const About=()=>{

  return(
  
    <section class="section pt-0" id="about">
      
        <div class="container text-center">
        
            <div class="about">
                <div class="about-img-holder">
                </div>
                <div class="about-caption">
                    <p class="section-subtitle">Who Am I ?</p>
                    <h2 class="section-title mb-3">About Me</h2>
                    <p>
                        I am a highly skilled and motivated Full Stack Developer with a passion for creating innovative and efficient solutions. With a strong foundation in both front-end and back-end development, I possess the technical expertise and creativity to deliver high-quality projects. I thrive in collaborative environments, where I can utilize my problem-solving skills and adaptability to overcome challenges and deliver exceptional results.      
                    </p>
                    <div id="cv"></div>
                     </div>              
            </div>
        </div>
    </section> 
    
  )
  }
  
  ReactDOM.render(<About></About>,document.getElementById('About'))
  
// CV 
const CV=()=>{
  const file=require('./robots.pdf')
  return(
  <a class="btn-rounded btn btn-outline-primary mt-4" href={file}>Download CV</a>
  )
}
ReactDOM.render(<CV></CV>,document.getElementById('cv'))
