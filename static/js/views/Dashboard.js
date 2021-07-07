import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Dashboard')
    }
    async getHtml(){
         return `
         <section id="about" class="mt-4 pt-4 bg-light">
         <div class="row align-items-center justify-content-between">
             <div class="col-lg p-5 text-dark text-end">
                 <h3>
                     I am Web Developer, graduated at <span href="#" class="text-warning">SENA.</span> 
                     
                 </h3>
                 <p>I am Technologist of <em class="text-primary">Analysis and Information Systems Development</em> (ADSI) from CESFI</p>
                 <a href="/profile#profile" class="btn btn-success mt-3" data-link>
                     Read more
                   </a>
             </div>
             <div class="col-lg p-5 text-center">
             <h1 class="text-danger">
               <i class="fab" style="font-size:216px;">&#xf13b;</i></h1>
             </div>
         </div>
     </section>

     <section class="bg-dark text-light" 
     id="learn">
       <div class="container">
         <!--Vertical alineation-->
         <div class="row align-items-center justify-content-between">
           <div class="col-lg text-lead"><em><i class='fab' style='font-size:120px'>
             <img src="static/img/php.png" class="img-fluid" alt="&#xf457;"></i>
           </em>
             </div>
           <div class="col-lg p-5">
             <h2 class="display-6 text-primary">Learn the Fundamentals
             </h2>
             <p>
               Understand OOP (Object Oriented Programming) is a <em>paradigm</em>  in modern and succesful applications. 
             </p>
             <p>
               Software architecture in <em class="text-warning">web applications</em>  in the last 10 years has evolved to mobile portability.  
             </p>
             <a href="/learn" class="btn btn-light mt-3" data-link>
               <i class="bi bi-chevron-right">
               </i>Read More
             </a>
           </div>
         </div>
       </div>
     </section>
        `
    }
}