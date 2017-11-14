"use strict";

var React = require('react');

var OrgChart = function OrgChart(_ref) {
  var tree = _ref.tree,
      NodeComponent = _ref.NodeComponent;


  var renderChildren = function renderChildren(node) {

    var hasSiblingRight = function hasSiblingRight(childIndex) {
      return (node.children || []).length > childIndex + 1;
    };

    var hasSiblingLeft = function hasSiblingLeft(childIndex) {
      return childIndex > 0;
    };

    var nodeLineBelow = React.createElement(
      "td",
      { colSpan: (node.children || []).length * 2, className: "nodeGroupCellLines" },
      React.createElement(
        "table",
        { className: "nodeLineTable" },
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("td", { colSpan: 2, className: "nodeLineCell nodeGroupLineVerticalMiddle" }),
            React.createElement("td", { colSpan: 2, className: "nodeLineCell" })
          )
        )
      )
    );

    var childrenLinesAbove = (node.children || []).map(function (child, childIndex) {
      return React.createElement(
        "td",
        { colSpan: "2", className: "nodeGroupCellLines", key: childIndex },
        React.createElement(
          "table",
          { className: "nodeLineTable" },
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement("td", { colSpan: 2, className: "nodeLineCell nodeGroupLineVerticalMiddle" + (hasSiblingLeft(childIndex) ? ' nodeLineBorderTop' : '') }),
              React.createElement("td", { colSpan: 2, className: "nodeLineCell" + (hasSiblingRight(childIndex) ? " nodeLineBorderTop" : "") })
            )
          )
        )
      );
    });

    var children = (node.children || []).map(function (child, childIndex) {
      return React.createElement(
        "td",
        { colSpan: "2", className: "nodeGroupCell", key: childIndex },
        renderChildren(child)
      );
    });

    return React.createElement(
      "table",
      { className: "orgNodeChildGroup" },
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            { className: "nodeCell", colSpan: (node.children || []).length * 2 },
            React.createElement(NodeComponent, { node: node })
          )
        ),
        React.createElement(
          "tr",
          null,
          (node.children || []).length > 0 && nodeLineBelow
        ),
        React.createElement(
          "tr",
          null,
          childrenLinesAbove
        ),
        React.createElement(
          "tr",
          null,
          children
        )
      )
    );
  };

  return React.createElement(
    "div",
    { className: "reactOrgChart" },
    renderChildren(tree)
  );
};

module.exports = OrgChart;