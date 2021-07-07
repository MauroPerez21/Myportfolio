import Dashboard from './views/Dashboard.js'
import Posts from './views/Posts.js'
import Contact from './views/Contact.js'
import Learn from './views/Learn.js'
import Projects from './views/Projects.js'
console.log('JS is loaded!');

const navigateTo = url =>{
    history.pushState(null, null, url)
    router()
};
//Test each route for potential match
const router = async () =>{
    const routes = [
    { path: '/home',    view: Dashboard},
    { path: '/profile', view: Posts },
    { path: '/contact', view: Contact },
    { path: '/learn', view: Learn },
    { path: '/projects', view: Projects},
    
    ];
const potentialMatches = routes.map(route =>{
  return{
        route: route,
        isMatch: location.pathname === route.path
  }; 
}); 
let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
//Not found route
  if(!match){
    match = {
        route: routes[0],
        isMatch: true
    }
  }
  //console.log(match.route.view())
  const view = new match.route.view()
  // console.log(view.getHtml())
  document.querySelector('#app').innerHTML = await view.getHtml()
  
}
//Actives router history
window.addEventListener('popstate',router);

document.addEventListener('DOMContentLoaded',()=>{
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')){
            e.preventDefault();
            navigateTo(e.target.href)
        }
    });
    router()
});