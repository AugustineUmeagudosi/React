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
      <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Brand Name</span></span>}>
              <Navigation>
                  <Link to="/aboutme">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Quick Links">
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
