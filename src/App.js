import './App.scss';
import {Switch, Route, Redirect} from "react-router-dom"
import About from './About/About';
import Header from './Header/Header';
import ProjectBig from './ProjectBig/ProjectBig';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Data from "./Data.json"

function App() {

/* ,{"title":"Bookmark","description":"This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.","img":"/images/portfolio/desktop/image-portfolio-bookmark.jpg","type":"Interaction Design / Front-End Development","techUsed":["HTML","CSS","ES6 JAVASCRIPT"],"liveLink":"https://book-mark-by-henock-adane.vercel.app/"}*/




  // const socket = io.connect("http://localhost:3001/")
  

  return (
    <div className="App">


    <Header />
    

    <Switch>

    <Route exact={true} path="/portfolio" render={()=> <Portfolio projectDetails={Data} />} />

    <Route exact={true} path="/" render={()=> <About/> } />

      {Data.map((project, i) => <Route exact={true} path={`/portfolio/${project.title}`} render={() => <ProjectBig 
      title={project.title} 
      img={project.img}
      key={i}
      liveLink={project.liveLink}
      githubLink={project.githubLink}
      description={project.description}
      techUsed={project.techUsed}
      />

        } />
      )}


      <Route exact={true} path="/contact" render={()=> <Contact /> } />

      <Route path="*" render={() => <Redirect to="/" />} />


    </Switch>


      
    </div>
  );
}

export default App;
