const React = require('react')

const OrgChart = ({title, tree, NodeComponent}) => {

  const renderChildren = (node) => {

    const hasSiblingRight = (childIndex) => {
      return node.children.length > (childIndex + 1)
    };

    const hasSiblingLeft = (childIndex) => {
      return childIndex > 0
    };

    const nodeLineBelow = (
      React.createElement("td", {colSpan: node.children.length * 2, className: "nodeGroupCellLines"}, 
        React.createElement("table", {className: "nodeLineTable"}, 
          React.createElement("tr", null, 
            React.createElement("td", {className: "nodeLineCell nodeGroupLineVerticalMiddle"}), 
            React.createElement("td", {className: "nodeLineCell"})
          )
        )
      )
    );

    const childrenLinesAbove = (node.children || []).map((child, childIndex) => (
      React.createElement("td", {colSpan: "2", className: "nodeGroupCellLines"}, 
        React.createElement("table", {className: "nodeLineTable"}, 
          React.createElement("tr", null, 
            React.createElement("td", {className:  "nodeLineCell nodeGroupLineVerticalMiddle" + (hasSiblingLeft(childIndex) ? ' nodeLineBorderTop' : '') }), 
            React.createElement("td", {className:  "nodeLineCell" + (hasSiblingRight(childIndex) ? " nodeLineBorderTop" : "") })
          )
        )
      )
    ));

    const children = (node.children || []).map(child => (
      React.createElement("td", {colSpan: "2", className: "nodeGroupCell"}, 
         renderChildren(child) 
      )
    ));

    return (
      React.createElement("table", {className: "orgNodeChildGroup"}, 
        React.createElement("tr", null, 
          React.createElement("td", {className: "nodeCell", colSpan: node.children.length * 2}, 
            React.createElement(NodeComponent, {node: node})
          )
        ), 
        React.createElement("tr", null, 
          node.children.length > 0 && nodeLineBelow
        ), 
        React.createElement("tr", null, 
          childrenLinesAbove
        ), 
        React.createElement("tr", null, 
          children
        )
      )
    )
  };

  return (
    React.createElement("div", {className: "reactOrgChart"}, 
      React.createElement("h2", null, title, "!!!???"), 
      renderChildren(tree)
    )
  )
};

module.exports = OrgChart;
