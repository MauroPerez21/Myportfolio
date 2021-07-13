import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Contact')
    }
    async getHtml(){
         return `
<section class="bg-dark mt-4 py-4 h-25">
<div class="container ">

<div class="row">
  <div class="col-md-6">
    <h3 class="display-6 text-primary">Timeline</h3> 
  </div>
  <div class="col-md-6"> 
  <h3 class="display-6 text-primary">FAQ</h3>
  </div>
</div>
<div class="row align-items-center text-secondary">
<div class="col-md-6">
    <ul class="list-group list-group-flush">
    <div class="list-group-item bg-dark text-secondary">
      <span class="fw-bold text-primary">2016:</span> I started to study <em>ADSI</em> at SENA.
    </div>
    <div class="list-group-item bg-dark text-secondary">
      <span class="fw-bold text-primary">2017:</span> Learned about Information Systems and programming with OOP.
    </div>
    <div class="list-group-item bg-dark text-secondary">
      <span class="fw-bold text-primary">2018:</span> My partners and I code our first ecommerce website with PHP.
      <li><span class="caret"></span>
        <ul class="nested">
          <li>I graduate with 2 <em>Honor Rolls,</em> and learned to design with Bootstrap.</li>
        </ul>
      </li>
    </div>
    <div class="list-group-item bg-dark text-secondary">
      <span class="fw-bold text-primary">2019:</span> I developed my first ecommerce site with Laravel.
    </div>
    <div class="list-group-item bg-dark text-secondary">
      <span class="fw-bold text-primary">2020:</span> I developed another ecommerce site with Node.js.
    </div>
    <div class="list-group-item bg-dark text-secondary">
      <span class="fw-bold text-primary">2021:</span> I started as a Freelance in Web Development.
    </div>
    </ul>
</div>
<div class="col-md-6">
  <div class="d-flex justify-content-center">
    <iframe width="384" height="100%"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
  </div>
  <h6 class="text-warning">
  Why to devolop Web Sites at 2021?</h6>
  <p>-Because personalization and scalabality are important concepts in model business.</p>
</div>
</div>
</div>

  <div class="d-flex justify-content-center align-items-center h-50 bg-light">
    <div class="container">
      <h2 class="display-4 text-primary text-end">Contact me</h2>
     <div class="row text-center">
      <div class="col ms-auto display-flex my-4">
        <img src="/static/img/Rhombus.gif" class="img-fluid" style="width:96px" alt="">
      </div>
    </div>  
    
    <div class="row g-3 pb-4">
   
        <div class="col-md-6 d-grid ">
        
          <a href="https://api.whatsapp.com/send?phone=573106323631" class="btn btn-success"><i class="bi bi-whatsapp"></i>&nbsp;whatsapp</a>
        </div>
      
        <div class="col-md-6 d-grid">
          <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-contact">
            Contact
          </a>
        </div>
        
    </div>  
  </div>
  </div>
</section>

       
        `
    }
}