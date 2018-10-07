"use strict";

var React = require('react');

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var OrgChart = function OrgChart(_ref) {
  var tree = _ref.tree,
      NodeComponent = _ref.NodeComponent,
      options = _objectWithoutProperties(_ref, ["tree", "NodeComponent"]);

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
            React.createElement(NodeComponent, _extends({ node: node }, options))
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