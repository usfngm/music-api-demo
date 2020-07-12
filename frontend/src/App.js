import React, { Component } from 'react';
import { Layout } from 'antd';
import Home from './components/Home';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

const { Header, Footer, Content } = Layout;

class App extends Component {

  pushFooterToBottomStyle = () => {
    var full = document.documentElement.clientHeight;
    var offset = (64 * 100) / full;
    offset = 100 - offset;
    return {
      minHeight: offset + 'vh'
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Header>
              <h1 style={{ color: 'white' }}>Music API Demo</h1>
            </Header>
            <div style={this.pushFooterToBottomStyle()} className="flex-wrapper">
              <Content className="site-content">
                <Switch>
                  <Route path='/genres' component={Home} />
                  <Redirect to="/genres" />
                </Switch>
              </Content>
              <Footer style={{ backgroundColor: '#001529', color: '#FFFFFF', textAlign: 'center' }}>
                <span>Made with love &#x2764;</span>
              </Footer>
            </div>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
