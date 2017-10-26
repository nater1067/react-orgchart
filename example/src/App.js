import React, { Component } from 'react';
import './App.css';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';

class App extends Component {
  render() {


    const initechOrg = {
      name: "Bill Lumbergh",
      actor: "Gary Cole",
      children: [
        {
          name: "Peter Gibbons",
          actor: "Ron Livingston",
          children: [
            {
              name: "And More!!",
              actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
            }
          ]
        },
        {
          name: "Milton Waddams",
          actor: "Stephen Root"
        },
        {
          name: "Bob Slydell",
          actor: "John C. McGi..."
        },
      ]
    };

    const MyNodeComponent = ({node}) => {
      return (
        <div className="initechNode" onClick={() => alert("Hi my real name is: " + node.actor)}>{ node.name }</div>
      );
    };

    return (
      <div className="App" id="initechOrgChart">
        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;
