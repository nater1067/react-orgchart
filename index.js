const React = require('react')

const OrgChart = ({title, tree, NodeComponent}) => {

  const renderChildren = (node) => {

    const children = (node.children || []).map(child => (
      React.createElement("td", {colSpan: "2", className: "nodeGroupCell"}, 
         renderChildren(child) 
      )
    ));

    return (
      React.createElement("div", null, 
        React.createElement("table", {className: "childGroup"}, 
          React.createElement("tr", null, 
            React.createElement("td", {className: "nodeCell", colSpan: "6"}, 
              React.createElement(NodeComponent, {node: node})
            )
          ), 
          React.createElement("tr", null, 
            children
          )
        )
      )
    )
  };

  return (
    React.createElement("div", {className: "orgChart"}, 
      React.createElement("h2", null, title), 
      renderChildren(tree)
    )
  )
};

module.exports = OrgChart;
