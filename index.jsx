const React = require('react')

const OrgChart = ({title, tree, NodeComponent}) => {

  const renderChildren = (node) => {

    const hasSiblingRight = (childIndex) => {
      return (node.children || []).length > (childIndex + 1)
    };

    const hasSiblingLeft = (childIndex) => {
      return childIndex > 0
    };

    const nodeLineBelow = (
      <td colSpan={(node.children || []).length * 2} className="nodeGroupCellLines">
        <table className="nodeLineTable">
          <tr>
            <td className="nodeLineCell nodeGroupLineVerticalMiddle" />
            <td className="nodeLineCell" />
          </tr>
        </table>
      </td>
    );

    const childrenLinesAbove = (node.children || []).map((child, childIndex) => (
      <td colSpan="2" className="nodeGroupCellLines">
        <table className="nodeLineTable">
          <tr>
            <td className={ "nodeLineCell nodeGroupLineVerticalMiddle" + (hasSiblingLeft(childIndex) ? ' nodeLineBorderTop' : '') } />
            <td className={ "nodeLineCell" + (hasSiblingRight(childIndex) ? " nodeLineBorderTop" : "") } />
          </tr>
        </table>
      </td>
    ));

    const children = (node.children || []).map(child => (
      <td colSpan="2" className="nodeGroupCell">
        { renderChildren(child) }
      </td>
    ));

    return (
      <table className="orgNodeChildGroup">
        <tr>
          <td className="nodeCell" colSpan={(node.children || []).length * 2}>
            <NodeComponent node={node}/>
          </td>
        </tr>
        <tr>
          {(node.children || []).length > 0 && nodeLineBelow}
        </tr>
        <tr>
          {childrenLinesAbove}
        </tr>
        <tr>
          {children}
        </tr>
      </table>
    )
  };

  return (
    <div className="reactOrgChart">
      <h2>{title}!!!???</h2>
      {renderChildren(tree)}
    </div>
  )
};

module.exports = OrgChart;
