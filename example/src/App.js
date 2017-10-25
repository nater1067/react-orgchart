import React, { Component } from 'react';
import './App.css';
import OrgChart from 'react-orgchart';

class App extends Component {
  render() {


    const initechOrg = {
      name: "Bill Lumbergh",
      actor: "Gary Cole",
      children: [
        {
          name: "Peter Gibbons",
          actor: "Ron Livingston"
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
        <div className="node" onClick={() => alert("Hi my real name is: " + node.actor)}>{ node.name }</div>
      );
    };

    const orgChartTitle = 'Initech Actors';

    return (
      <div className="App">
        <OrgChart title={orgChartTitle} tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;
