function renderScope(root) {
	var width = 1150,
    height = 800,
    root = root;

var nodes = flatten(root),
  links = d3.layout.tree().links(nodes);

for(i=0; i<nodes.length; i++) {
  var task = nodes[i];
  if(task.children!==undefined) {
    var size = 0;
    for (var j = 0; j < task.children.length; j++) {
      size+=task.children[j].size;
    };
    nodes[i].size = size;
  }
}

var force = d3.layout.force()
    .charge(-200)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

// console.log(flatten(root));

//Toggle stores whether the highlighting is on
var toggle = 0;
//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
links.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});
//This function looks up whether a pair are neighbours
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}

// nodes.forEach(function(d) {
//   d._children = d.children;
//   d.children = null;
// });

update();


function update() {
  nodes = flatten(root);
  links = d3.layout.tree().links(nodes);

  var values = [];
  for(var i=0; i<nodes.length; i++) {
    values.push(nodes[i].size);
  }

  var largestQty = d3.max(values),
    smallestQty = d3.min(values);
  var scale = d3.scale.linear()
        .domain([smallestQty, largestQty])
        .range([15, 50]);

  // Restart the force layout.
  force
    .linkDistance(50)
    .nodes(nodes)
    .links(links)
    .start();

  // Update links.
  link = link.data(links, function(d) { return d.target.id; });

  link.exit().remove();

  link.enter().insert("line", ".node")
      .attr("class", "link");

  // Update nodes.
  node = node.data(nodes, function(d) { return d.id; });

  node.exit().remove();

  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .on('dblclick', dblClick)
      .on("click", click)
      .on("mouseover", connectedNodes)
      .on("mouseout", connectedNodes)
      .call(force.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return scale(d.size); });

  nodeEnter.append("text")
      .attr("dy", ".35em")
      .text(function(d) { return d.name; })
      .style("font-size", "12px")
      // .attr("class", "shadow");
      // .attr("font-weight", "bold");

  node.select("circle")
      .style("fill", function(d) {
        return d.colour;
      });
}

function tick() {

  // force
  //   .linkDistance(function(d) {
  //     return scale(d.size)/2;
  //   });

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  // function(d) {console.log(d.r);};

  node.attr("cx", function(d) { return d.x = Math.max(0, Math.min(width - 0, d.x)); })
    .attr("cy", function(d) { return d.y = Math.max(0, Math.min(height - 0, d.y)); });

  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });
}

function color(d) {
  // return d._children ? "#3182bd" // collapsed package
  //     : d.children ? "#c6dbef" // expanded package
  //     : "#fd8d3c"; // leaf node
  var color = "#CCFFFF"; //leaf
  if(d._children) {
    color = "#66FFCC"; // retracted
  } else if(d.children) {
    color = "#FFCCFF"; //expanded
  }
  return color;
}

// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

function dblClick(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  var popup = new chartpopup();
  popup.show({Name: d.name, "Estimated Man Hours": d.size, Details: d.details}, d);
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}

function connectedNodes() {
    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        node.transition()
    .duration(300).style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.4;
        });
        link.transition()
    .duration(300).style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.4;
        });
        //Reduce the op
        toggle = 1;
    } else {
        //Put them back to opacity=1
        node.transition()
    .duration(300).style("opacity", 1);
        link.transition()
    .duration(300).style("opacity", 1);
        toggle = 0;
    }
}
}