## Simple Org Chart for React
<img width="388" alt="screen shot 2017-10-25 at 8 41 51 am" src="https://user-images.githubusercontent.com/909721/32008167-66a73b7c-b960-11e7-8d71-31a6a86c12dc.png">

See the [example project](example/README.md) for demonstration of creating org chart data structure and using the OrgChart component.

This project focuses on the simplicity of its api.

### Step 1: Create the org chart tree as an object literal.
The ```children``` property of each node are rendered as children nodes.

```jsx harmony
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
```
### Step 2: Define a React Component for the nodes which receives each node object literal as a prop.
You can easily add functionality as you see fit to this node component.
Pass down necessary data through the tree structure outlined above.
```jsx harmony
const MyNodeComponent = ({node}) => {
  return (
    <div className="node" onClick={() => alert("Hi my real name is: " + node.actor)}>{ node.name }</div>
  );
};
```

### Step 3: Define a title for the org chart.
```jsx harmony
const orgChartTitle = 'Initech Actors'
```

### Final Step: Add the ```OrgChart``` component to your app.
```jsx harmony
<OrgChart title={orgChartTitle} tree={initechOrg} NodeComponent={MyNodeComponent} />
```

### Additionally, you may want to style your org chart.
See [Example project stylesheet](example/src/App.css) for ideas.
