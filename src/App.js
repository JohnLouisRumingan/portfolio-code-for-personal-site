import React from 'react';
import './dist/css/main.css';
import DrawerToggleButton from './Components/SideDrawer/DrawerToggleButton'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import {Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import About from './Containers/About'
import LandingPage from './Containers/LandingPage'
import StoryContainer from './Containers/StoryContainer';
import ProjectContainer from './Containers/ProjectContainer';
import Copyright from './Containers/Copyright';
import BlogContainer from './Containers/BlogContainer';
import Backdrop from './Components/Backdrop/Backdrop';
import ProjectDetail from './Components/ProjectDetail';
import ContactContainer from './Containers/ContactContainer';
// removed Redirect and withRouter from react-router-dom import 

class App extends React.Component {

  render(){

    let backdrop;
    let projectDetail;
    if (this.props.backdrop){
      backdrop = <Backdrop />;
      projectDetail = <ProjectDetail info={this.props.projectDetails}/>;
    }


    return (
      <div className={this.props.navigation === "/" ? "App bg-image" : "App"} >
        <header>
          <DrawerToggleButton />
          <SideDrawer />
          {projectDetail}
          {backdrop}
        </header>
        <Switch>
          <Route exact path='/about' render={() => <About />}/>
          <Route exact path='/blog' render={() => <BlogContainer />}/>
          <Route exact path='/contact' render={() => <ContactContainer />}/>
          <Route exact path='/projects' render={() => <ProjectContainer />}/>
          <Route exact path='/story' render={() => <StoryContainer />}/>
          <Route exact path='/' render={() => <LandingPage />}/>
        </Switch>
        {this.props.navigation === "/" ? null : <Copyright />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
   return {
    sideDrawerOpen: state.sideDrawerOpen,
    navigation: state.navigationPage,
    projectDetails: state.projectDetail,
    backdrop: state.backdrop,
   }
}

export default connect(mapStateToProps)(App);