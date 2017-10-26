## Simple Org Chart for React
<img width="641" alt="screen shot 2017-10-26 at 8 50 24 am" src="https://user-images.githubusercontent.com/909721/32062927-c3bd53a8-ba2a-11e7-9349-efc3db797b31.png">

See the [example project](example/README.md) for demonstration of creating org chart data structure and using the OrgChart component.

This project focuses on the simplicity of its api.

### Installation: Import Javascript and CSS
```jsx harmon
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';
```

### Step 1: Create the org chart tree as an object literal.
The ```children``` property of each node are rendered as children nodes.

```jsx harmony
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
```
### Step 2: Define a React Component for the nodes which receives each node object literal as a prop.
You can easily add functionality as you see fit to this node component.
Pass down necessary data through the tree structure outlined above.
```jsx harmony
const MyNodeComponent = ({node}) => {
  return (
    <div className="initechNode" onClick={() => alert("Hi my real name is: " + node.actor)}>{ node.name }</div>
  );
};
```

### Final Step: Add the ```OrgChart``` component to your app.
```jsx harmony
<OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
```

### Additionally, you may want to style your org chart.
See [Example project stylesheet](example/src/App.css) for ideas.

### Customizing Styles
Simple wrap your org chart in a div with an id and define styles like this:
```css
.initechNode {
    border: solid 3px red;
    border-radius: 3px;
    padding: 5px;
    width: 150px;
    display: inline-block;
}

#initechOrgChart .orgNodeChildGroup .nodeGroupLineVerticalMiddle {
    border-right: solid 3px red
}

#initechOrgChart .nodeLineBorderTop {
    border-top: solid 3px red;
}
```
