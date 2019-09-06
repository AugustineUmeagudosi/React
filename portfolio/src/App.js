import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Always shows a header, even in smaller screens. */}
      <div>
        <Layout fixedHeader>
          <Header className = 'header-color' title={<span><span style={{ color: '#ddd' }}><Link to ='/' style={{textDecoration:'none', color:'#ddd'}}>NightGeeks Inc.</Link></span></span>}>
            <Navigation>
              <Link to="/aboutme">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none'}} to="/">NightGeeks Inc.</Link>}>
            <Navigation>
              <Link to="/aboutme">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            {/* body of the page goes here */}
            <Main/>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
