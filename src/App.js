import './App.scss';
import {Switch, Route, Redirect} from "react-router-dom"
import About from './About/About';
import Header from './Header/Header';
import ProjectBig from './ProjectBig/ProjectBig';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Data from "./Data.json"

function App() {

  

  return (
    <div className="App">


    <Header />
    

    <Switch>

    <Route exact={true} path="/portfolio" render={()=> <Portfolio projectDetails={Data} />} />

    <Route exact={true} path="/" render={()=> <About/> } />

      {Data.map((project, i) => <Route exact={true} key={i} path={`/portfolio/${project.title}`} render={() => <ProjectBig 
      title={project.title} 
      img={project.img}
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
