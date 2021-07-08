import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Posts')
    }
    async getHtml(){
         return `
         <!--Brief-->
         <div class="intro-left">
         <div class="container-fluid full-height">
          
           <div class="row text-center align-items-center full-height pt-5 mt-5">
             <div class="col" style="border-bottom:2px solid blueviolet">
             <h1 class="text-primary">
               <i class="bi bi-person-circle" style="font-size:192px;"></i></h1>
             <p class="h2 text-light display-6">Mauricio P&eacuterez</p>
             <p class="text-warning">Web Developer Full Stack</p>
       
             </div>
           </div>
         </div>
       </div> 
       <!--Elegant presentation columns-->
<div class="container-fluid " id="main">
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-8 panel-right" >
      
             
      <section data-index="0" class="intro" >
        <div id="intro" 
        class="mask container text-light py-5 my-5">
        <h2 class="display-4 mt-5">Welcome To My Personal Portfolio</h1>
        <h4 class="display-6 mb-5 bg-dark"><small>
        I enjoy writing code and learning about software development technologies.</small>
        </h2>
        </div>
      </section>
      <!--Social-->
      <div class="container bg-primary text-light d-flex justify-content-center align-items-center h50">
        <a href="" class="btn text-light"><i class="bi bi-github text-dark mx-1"></i></a>
        <a href="" class="btn text-light"><i class="bi bi-facebook text-dark mx-1"></i></a>
        <a href="" class="btn text-secondary"><i class="bi bi-linkedin text-dark mx-1"></i></a>
      
      </div>
<!--profile-->
      <section data-index="1" class="profile">
      <div id="profile" 
      class="container-fluid bg-light g-4 pt-5 my-5">
        <h2 class="text-center text-warning">
        <i class="fa fa-graduation-cap">
        </i>Education</h2>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-8">
              <ul class="list-group list-group-flush lead">
                <div class="list-group-item">
                  <span class="fw-bold">Degree of:</span> Technologist
                </div>
                <div class="list-group-item">
                  <span class="fw-bold">Institute:</span> SENA (Servicio Nacional de Aprendizaje)
                </div>
                <div class="list-group-item">
                  <span class="fw-bold">Year:</span> 2018
                </div>
                <div class="list-group-item">
                  <span class="fw-bold">Awards:</span> 2 times at Honor Roll
                </div>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="h1 mb-3 text-dark text-center" id="imgportfolio">
              <i class="fa" style="font-size:120px;">&#xf501;</i>
              </div>
            </div>
          </div>
          <div class="row justify-content-between text-dark">
            <div class="col-lg-8">
              <p class="h6 display-6">Profile</p>
              <ul class="list-group list-group-flush lead">
                  <div class="list-group-item">
                    <span class="fw-bold">Application:</span> Web developer
                  </div>
                  <div class="list-group-item">
                    <span class="fw-bold">Focused on:</span> Front-end design, relational, and no-relational databases.
                  </div>
                  <div class="list-group-item">
                    <span class="fw-bold">Salary:</span> Between $400u.s. and $600u.s
                  </div>
                  <div class="list-group-item">
                    <span class="fw-bold">Reference:</span> Freelance at IT technologies 
                  </div>
                </ul>
                <br>
              <p class="h6 display-6">Work Experience</p>
              <ul>
                <li>Freelance as Web Developer</li>
              </ul>
            </div>
            <div class="col-lg-4">
              <p class="h6 display-6">
                Interests
              </p>
              <div class="bg-light">
                It is a pleasure to me to serve people according to their business and needs. 
              </div>
              <p class="h6 display-6">
                Languages
              </p>
              <ul>
                <li>English: level advanced</li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
      </section>
 
<!--skills-->
      <section data-index="2" class="skills">
      <div id="skills" 
      class="container bg-primary p-5 my-5">
        <h2 class="display-5 text-center text-light"><i class="bi bi-tools"></i> Skills</h2>

          <div class="row text-light bg-dark ms-auto">
            <div class="col-md-4"> 
              <br>
              <h4 class="text-primary">&nbsp;Back-end</h4>
              <br>
              <h5 class="display-6 text-danger text-center"><i class="bi bi-gear"></i></h5>
              <ul class="text-end">
                <li>SQL</li>
                <li>JSON</li>
                <li>SQLite3</li>
                <li>MongoDB</li>
              </ul>
              
            </div>
            <div class="col-md-4"><br>
              <h4 class=" text-primary">&nbsp;Front-end</h4>
              <br>
              <h4 class="display-6 text-center"><i class="bi bi-brush"></i></h4>
              <ul class="text-end">
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>Photoshop</li>
              </ul>
            </div>
            
            <div class="col-md-4"> <br>
              <h4 class="text-primary">&nbsp;Frameworks</h4>
               <br>
              <h5 class="display-6 text-success text-center"><i class="bi bi-laptop"></i></h5>
              
              <ul class="text-end">
                <li>Express</li>
                <li>Laravel</li>
                <li>React</li>
              </ul>
            </div>
<!--START ICONS-->
            
<!--End icons-->
          </div>
        </div>
      </section> 
       
        `
    }
}