import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle('Learn')
    }
    async getHtml(){
         return `
    <section class="d-flex justify-content-center align-items-center h-50 bg-light mt-4 pt-4">
      <div id="learn" 
      class="container bg-dark text-light p-5 my-5">
        <!--Vertical alineation-->
        <div class="row align-items-center justify-content-between">
          
          <div class="col-lg">
            <h2 class="display-6 text-danger">Learn the Frameworks</h2>
            <p>
              Once you acquire OOP skills, the next step is to develop and deploy via <em class='text-warning'>frameworks</em>
            </p>
            <p>
              Frameworks are important tools for software <em>reusability </em> and <em>quality control</em> in <em class="text-warning">production</em>.
            </p>
            <a href="/projects" class="btn btn-light mt-3" data-link>
              <i class="bi bi-chevron-right">
              </i>Watch my projects
            </a>
          </div>
          <div class="col-lg text-danger text-center w-10">
          <i class='fab' style='font-size:196px;'>&#xf3bd;</i>
          </div>
        </div>
      </div>
      </section>

        `
    }
}