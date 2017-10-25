const React = require('react')

const OrgChart = ({title, tree, NodeComponent}) => {

  const renderChildren = (node) => {

    const children = (node.children || []).map(child => (
      <td colSpan="2" className="nodeGroupCell">
        { renderChildren(child) }
      </td>
    ));

    return (
      <div>
        <table className="childGroup">
          <tr>
            <td className="nodeCell" colSpan="6">
              <NodeComponent node={node}/>
            </td>
          </tr>
          <tr>
            {children}
          </tr>
        </table>
      </div>
    )
  };

  return (
    <div className="orgChart">
      <h2>{title}</h2>
      {renderChildren(tree)}
    </div>
  )
};

module.exports = OrgChart;
