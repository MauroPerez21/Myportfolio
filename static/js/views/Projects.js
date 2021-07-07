import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Projects')
    }
    async getHtml(){
         return `
  <div class="intro-left">
    <div class="container-fluid full-height">
     
      <div class="row text-center align-items-center full-height pt-5 mt-5">
        <div class="col" style="border-bottom:2px solid blueviolet">
        <h1 class="text-primary">
        <i class="fa " style="font-size:192px;">&#xf4fe;</i></h1>
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

<!--SECTION ITERATION-->


<!--projects-->
<section data-index="2" class="projects">
  <div id="projects" 
  class="container my-5 py-5">
    <h2 class="text-center text-danger display-4"><i class="fa fa-flask"></i> My projects</h2>
    <h4 class="text-end text-muted display-6"><em>The art of web design</em></h4>
      <div class="row">

<!--Start Iteration-->
        <div class="col-lg-6 g-2">
          <div class="card bg-light">	
<div class="card-header text-center">
          <h1 class="text-secondary">
          <i class="fab" style="font-size:192px;">&#xf1f0;</i></h1></div>
            <div class="card-body">
              <h4 class="card-title text-end text-warning">Ecommerce</h5>
              <h6 class="card-subtitle mb-2 text-muted text-end">PHP-OOP With Laravel</h6>
              <p class="card-text">Fundamentals of SQL data structure</p>
              <a 
              type="button"
              class="btn btn-outline-primary float-right"
              href="/home"
              data-link
              >
                Test
              </a>
            
            </div>
          </div> 
        </div>
<!--End iteration-->

<!--Start Iteration-->
        <div class="col-lg-6 g-2">
          <div class="card bg-light">
<!--File Code Negative-->
<div class="card-header text-center">
          <h1 class="text-primary">
          <i class="fas" style="font-size:192px;">&#xf1c9;</i></h1></div>
            <div class="card-body">
              <h4 class="card-title text-end text-warning">Sqlite3</h5>
              <h6 class="card-subtitle mb-2 text-muted text-end">Relational Database</h6>
              <p class="card-text">Making CRUD operations with SQLite3.</p>
              <a 
              type="button"
              class="btn btn-outline-primary float-right"
              href="/home"
              data-link
              >
                Test
              </a>
            
            </div>
          </div> 
        </div>
<!--End iteration-->
<!--Start Iteration-->
        <div class="col-lg-6 g-2">
          <div class="card bg-light">
          <div class="card-header text-center">
<!--File Code Positive-->
          <h1 class="text-primary">
          <i class="far" style="font-size:192px;">&#xf1c9;</i></h1></div>
            <div class="card-body">
              <h4 class="card-title text-end text-warning">JSON</h5>
              <h6 class="card-subtitle mb-2 text-muted text-end">Non Relational Database</h6>
              <p class="card-text">Making CRUD operations with JSON</p>
              <a 
              type="button"
              class="btn btn-outline-primary float-right"
              href="/home"
              >
                Test
              </a>
            
            </div>
          </div> 
        </div>
<!--End iteration-->
<!--Start Iteration-->
        <div class="col-lg-6 g-2">
          <div class="card bg-light">
<div class="card-header text-center">
          <h1 class="text-secondary">
          <i class="fas" style="font-size:192px;">&#xf77d;</i></h1></div>
          
          <div class="card-body">
              <h4 class="card-title text-end text-warning">eCatalog</h5>
              <h6 class="card-subtitle mb-2 text-muted text-end">BambinoFashion21</h6>
              <p class="card-text">Design of products catalog (Node | Express framework).</p>
              <a 
              type="button"
              class="btn btn-outline-primary float-right"
              href="/home"
              data-link
              >
                Test
              </a>
            
            </div>
          </div> 
        </div>
<!--End iteration-->




      </div>
    </div>
  </section> 

      </div>
    </div>
  </div>
 
        `
    }
}