
function d1spl4y(x) {
    var xBox  = document.getElementsByClassName('box');
    if (x.matches) {
    geoMobile(xBox);
  
    }else {
   
    geoLaptop(xBox);
    } 
    }//end d1spl4y
function defineScreen(){var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    return w;}//EOF screenSize()

window.addEventListener("load", function(){
var x = window.matchMedia("(max-width: 768px)");
d1spl4y(x); // Call listener function at run time
x.addListener(d1spl4y); //Screen State
});//EOFile

//H E I G H T  A N D  W I D T H  D I S T R I B U T I O N
function geoMobile(y){ 
    var aside = document.getElementById('navaside');
    aside.style.display = 'none';
        mobile();
}//end 
function geoLaptop(x){//WIDTHS LAPTOP
    
    var aside = document.getElementById('navaside');
    aside.style.display = 'block';
    aside.style.marginRight = '-3%';
    /*
    var rotAside = document.getElementById('rotate');
    rotAside.style.top = '12px';
    rotAside.style.left = '12px';
    rotAside.style.zIndex = '99';
    rotAside.style.position = 'fixed';
    rotAside.style.transform = 'rotateZ(90deg)';
    rotAside.style.transition       = '0.5s';
    */
         laptop(); 
        };//end  
//M A R G I N S  A N d  P A D D I N G S
function laptop(){
    document.body.style.backgroundColor = "hsl(240,100%,15%)";   
}
function mobile(){
    document.body.style.backgroundColor = "hsl(240,100%,5%)";   
}




